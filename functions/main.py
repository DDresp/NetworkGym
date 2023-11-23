# The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
from firebase_functions import firestore_fn, https_fn

# The Firebase Admin SDK to access Cloud Firestore.
from firebase_admin import initialize_app

app = initialize_app()

@https_fn.on_request()
def checkOpenAI(req: https_fn.Request):
    return https_fn.Response("Hello Darius")