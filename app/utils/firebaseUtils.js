import Firebase from 'firebase';
import KiConstants from 'KiConstants';

var firebaseUtils = {
  homeInstance: function(){
    return new Firebase(KiConstants.FIREBASE_HOST);
  },
  addKi: function(kiObj){
    this.homeInstance().child("users").child(kiObj.user).push(kiObj.ki);
  },
  toArray: function(obj){
    var arr = [];
    var item = {};
    for(var key in obj){
      item = obj[key];
      item._id = key;
      arr.push(item);
    }

    return arr;
  }
};

export default firebaseUtils;