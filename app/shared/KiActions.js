import KiDispatcher from 'KiDispatcher';
import KiConstants from 'KiConstants';
import firebaseUtils from 'firebaseUtils';

var Actions = {
  appLoaded: function(){
    firebaseUtils.homeInstance().child('users').on('value', function(snapshot){
      KiDispatcher.handleAction({
        actionType: KiConstants.KI_UPDATE,
        data: {
          ki: snapshot.val().Mikey//HARD CODED. TODO: MAKE SESSION STORE
        }
      });
    });
  },

  aimInteraction: function(kiId, aimId){
    KiDispatcher.handleAction({
      actionType: KiConstants.AIM_UPDATE,
      data: {kiId, aimId}
    });
  },
};

export default Actions;