// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore, getDocs, getDoc, collection,where,query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbOM05GKyJJ_DNa49wBbrTrL3BTS543oM",
    authDomain: "ecommerce-react-f4864.firebaseapp.com",
    projectId: "ecommerce-react-f4864",
    storageBucket: "ecommerce-react-f4864.appspot.com",
    messagingSenderId: "970262407274",
    appId: "1:970262407274:web:56bc89539af42af8ca8213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// obtener un producto
export async function getSingleProduct(id) {

    const documentRef = doc(db, 'items', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log('el documento no existe');
        }
    } catch (error) {
        console.error("error al obtener el documento: " + error);
    }


}

// obtener una collection
export async function getProducts() {

    try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map(docu => {
                return {
                    id: docu.id,
                    ...docu.data()
                }
            })
            return productsList;
        } else {
            console.log('coleccion vacia');
        }
    } catch (error) {
        console.log("error al obtener el documento: " + error);
    }


}


// filtro categoria
export async function filterProductsByCategory(category) {

    try {
        const filteredQuery = query(collection(db, 'items'), where('category', '==', category));
        const querySnapshot = await getDocs(filteredQuery);
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map(docu => {
                return {
                    id: docu.id,
                    ...docu.data()
                }
            })
            return productsList;
        } else {
            console.log('coleccion vacia');
        }
    } catch (error) {
        console.log("error al obtener el documento: " + error);
    }


}