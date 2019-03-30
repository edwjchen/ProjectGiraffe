function updateName(newName) {
	var user = getUserName();
	firebase.firestore().collection('users').doc(user).update({
		"name": newName
	})
}

function updateLocation(newLoc) {
	var user = getUserName();
	firebase.firestore().collection('users').doc(user).update({
		"Location": newLoc
	})
}

function changePreferences(oldPrefs) {
	var user = getUserName();
	firebase.firestore().collection('users').doc(user).update({
		preferences: currPref
	})
}

function addOwnedItems(item) {
	var user = getUserName();
	var cItems;
	firebase.firestore().collection('users').doc(user).get()
      .then(function(doc) {
        cItems = doc.data().ownedItems;
      })
    cItems = cItems.push(item);
	firebase.firestore().collection('users').doc(user).update({
		ownedItems: cItems
	})
}

function removeOwnedItems(item) {
	var user = getUserName();
	var cItems;
	firebase.firestore().collection('users').doc(user).get()
      .then(function(doc) {
        cItems = doc.data().ownedItems;
      })
    var index = cItems.indexOf(item);
	if (index !== -1) cItems.splice(index, 1);
	firebase.firestore().collection('users').doc(user).update({
		ownedItems: cItems
	})
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}
