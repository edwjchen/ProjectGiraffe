function uploadPhoto(pic, title, type, user) {
	ref = firebase.storage().ref();
	const name = (+new Date()) + '-' + pic.name;
  var meta = { contentData: pic.type };
	const task = ref.child(name).put(pic, meta);
	task.then(snapshot => snapshot.ref.getDownloadURL())
	.then(function(url) {
    setTimeout(function() {
    	firebase.firestore().collection('items').add({
    		title: title,
    		types: type,
    		userId: user,
    		imageUrl: url
    	})
      .then(function() {
        window.location.href = "profile.html";
      })
    }, 10);
  });

}
