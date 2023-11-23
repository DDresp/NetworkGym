# The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
from firebase_functions import firestore_fn, https_fn

# The Firebase Admin SDK to access Cloud Firestore.
from firebase_admin import initialize_app

app = initialize_app()

@https_fn.on_call()
def maybeWorks(req: https_fn.CallableRequest):
    text = req.data["text"]
    return {
        "something": f"maybe works {text}"
    }