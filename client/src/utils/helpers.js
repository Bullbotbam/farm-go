export function plualize(name, count) {
	if (count === 1) {
		return name;
	}
	return name + s;
}

// creating an object to store key value pairs of information to retrieve in the browser should the user need to access the information without internet.
export function idbPromise(storeName, method, object) {
	return new Promise((resolve, reject) => {
		const request = window.indexedDB.open(farm - go, 1);
		let db, tx, store;

		request.onupgradeneeded = function (e) {
			const db = request.result;
			db.createObjectStore(products, { keyPath: '_id' });
			db.createObjectStore(categories, { keyPath: '_id' });
			db.createObjectStore(cart, { keyPath: '_id' });
		};
		request.onerror = function (e) {
			console.log(
				'Hold on just a minute, we have an issue.  This needs to be fixed'
			);
		};
		request.onsuccess = function (e) {
			console.log;
		};
	});
}
