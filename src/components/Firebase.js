import { Firebase as FirebaseSuper } from "upe-react-components";

const config = {
  apiKey: "AIzaSyBxBIbTYbRuqP1np-ri4YaJ0H6OYK4L46g",
  authDomain: "upe-website-fa07a.firebaseapp.com",
  databaseURL: "https://upe-website-fa07a.firebaseio.com",
  projectId: "upe-website-fa07a",
  storageBucket: "upe-website-fa07a.appspot.com",
  messagingSenderId: "896060764020",
  appId: "1:896060764020:web:331114a396e41adfa30621",
  measurementId: "G-BV6VQMMSQ5",
};

class Firebase extends FirebaseSuper {
  constructor(app) {
    super(app, config);

    this.inquisitorData = app.firestore().doc("inquisitor/data");
    this.storage = app.storage().ref("inquisitor");
    this.functions = app.functions();

    // *** Functions API ***
    this.exportInquisitorData = this.functions.httpsCallable(
      "exportInquisitorData"
    );
    this.importInquisitorData = this.functions.httpsCallable(
      "importInquisitorData"
    );
    this.sendApplicationReceipt = this.functions.httpsCallable(
      "sendApplicationReceipt"
    );
    this.notifyTimeslotsAreOpen = this.functions.httpsCallable(
      "notifyTimeslotsAreOpen"
    );
    this.notifyTimeslotsAreClosed = this.functions.httpsCallable(
      "notifyTimeslotsAreClosed"
    );
  }

  application = (uid) =>
    this.inquisitorData.collection("applications").doc(uid);
  applications = () => this.inquisitorData.collection("applications");

  timeslot = (uid) => this.inquisitorData.collection("timeslots").doc(uid);
  timeslots = () => this.inquisitorData.collection("timeslots");

  applicationFormConfig = () =>
    this.firestore.doc("inquisitor/applicationFormConfig");
  generalSettings = () => this.firestore.doc("inquisitor/generalSettings");

  allRoles = () => this.firestore.doc("config/roles");

  // *** Storage API ***
  file = (uid, name) => this.storage.child(`files/${uid}/${name}`);
  backup = (name) => this.storage.child(`backups/${name}`);
}

export default Firebase;