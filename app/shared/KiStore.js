import KiDispatcher from 'KiDispatcher';
import KiConstants from 'KiConstants';
import events from 'events';
var EventEmitter = events.EventEmitter;

import assign from 'react/lib/Object.assign';
import fbu from 'firebaseUtils';
import dateUtils from 'dateUtils';
import aimFactory from 'aimFactory';

var CHANGE_EVENT = 'change';

var _state = {
	timePeriod: {
		startDate: new Date(2015, 2, 15),
		span: 7
	},
	keyIndicators: {}
};

var api = {
	currentTimePeriod() {
		return _state.timePeriod;
	},

	getActiveKi(timePeriod) {
		var activeKi = fbu.toArray(_state.keyIndicators).filter(function(ki) {
			return ki.active;
		});

		return _seedAimMaps(activeKi, timePeriod) || activeKi;
	},

	setKi(data) {
		_state.keyIndicators = data;
	},

	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	}
}


var Store = assign({}, EventEmitter.prototype, api);


KiDispatcher.register(function(payload) {
		var action = payload.action;

		switch(action.actionType) {
				case KiConstants.KI_UPDATE:
						Store.setKi(action.data.ki);
						Store.emit(CHANGE_EVENT);
						break;

				case KiConstants.AIM_UPDATE:
						_updateAim(action.data.kiId, action.data.aimId);
						Store.emit(CHANGE_EVENT);
						break;

				default:
						return true;

		}
});

function _seedAimMaps(activeKi, timePeriod) {
	if (!timePeriod) {return};

	return activeKi.map(function(ki) {
			return _seedAimMap(ki, timePeriod);
	});
}

function _seedAimMap(ki, timePeriod) {
	var startDate = timePeriod.startDate;
	var aims = [];

	ki.aimMap = ki.aimMap || {};
	for (let i = 0; i < timePeriod.span; i ++) {
		var dateKey = dateUtils.addDays(startDate, i);
		if (!ki.aimMap[dateKey]) {
			ki.aimMap[dateKey] = aimFactory.binary();
		}
	}
	return ki;
}

function _updateAim(kiId, aimId) {
	console.log(kiId, aimId, _state.keyIndicators);

	var ki = _state.keyIndicators[kiId];

	if (!ki) {return;};

	var aim = ki.aimMap[aimId];
	if (!aim.planned) {
		aim.planned = true;
	} else if (aim.planned) {
		aim.complete = true;
	}
	console.log(aim);
	//else if (.planned && past) -> mark complete
	//else if (.planned && future) -> check this and handle in UI?
	//else if (!.planned && future) -> mark planned
	//else if (!.planned && past) -> check this and handle in UI?
}

export default Store;

