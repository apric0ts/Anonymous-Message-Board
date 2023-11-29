from flask import Flask, request, jsonify
from datetime import datetime

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Sending message to React server
@app.route("/api/send-message", methods = ['POST','GET'])
# POST is used because we are receiving and sending
def send_message():
    data = request.json

    received_message = data.get('messageText', '')

    # Gets current time
    current_date = datetime.now().strftime("%B %d, %Y")
    current_time = datetime.now().strftime("%H:%M:%S")

    if len(received_message) != 0:
        return jsonify(
            {
                "Date": current_date,
                "Time": current_time,
                "Message": received_message[0:128]

            }
    )


if __name__ == "__main__":
    app.run()

     