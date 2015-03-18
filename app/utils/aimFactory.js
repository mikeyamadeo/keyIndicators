function _aim(){
	return {
		planned: false
	}
}

function _binary() {
	var binary = _aim();
	binary.complete = false;
	binary.type = "binary";
	return binary;
}

var aimFactory = {
	binary() {
		return _binary();
	}
};

export default aimFactory;