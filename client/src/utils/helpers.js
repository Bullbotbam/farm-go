export function pluralize(name, count) {
	if (count === 1) {
		return name;
	}
	return name + 's';
}

// creating an object to store key value pairs of information to retrieve in the browser should the user need to access the information without internet.
export function idbPromise(storeName, method, object) {
	return new Promise((resolve, reject) => {
		const request = window.indexedDB.open('farm-go', 1);
		let db, tx, store;

		request.onupgradeneeded = function (e) {
			const db = request.result;
			db.createObjectStore('products', { keyPath: '_id' });
			db.createObjectStore('categories', { keyPath: '_id' });
			db.createObjectStore('cart', { keyPath: '_id' });
		};
		request.onerror = function (e) {
			console.log(
				'Hold on just a minute, we have an issue.  This needs to be fixed'
			);
		};
		request.onsuccess = function (e) {
			db = request.result;
			tx = db.transaction(storeName, 'readwrite');
			store = tx.objectStore(storeName);

			db.onerror = function (e) {
				console.log('error', e);
			};

			switch (method) {
				case 'put':
					store.put(object);
					resolve(object);
					break;
<<<<<<< HEAD
					// case 'get':
					// 	const all = store.getall();
					// 	all.onsuccess = function () {
					// 		resolve(all.result);
					// 	};
					break;
=======
				// case 'get':
				// 	const all = store.getall();
				// 	all.onsuccess = function () {
				// 		resolve(all.result);
				// 	};
				// 	break;
>>>>>>> dafd395b43475c99215446d03d263187edc630a0
				case 'delete':
					store.delete(object._id);
					break;
				default:
					console.log('No valid method');
					break;
			}
			tx.oncomplete = function () {
				db.close();
			};
		};
	});
}
