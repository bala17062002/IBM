from flask import Flask, render_template, request
import pickle
import numpy as np
import requests

# ... your existing Flask app code ...
app=Flask(__name__)


# Replace "<your API key>" with your actual IBM Cloud API key
API_KEY = "VKOIS-OqmrTs9cSQBE_ru49tg0wFeNwSMQVOJwqbKXa4"
token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
mltoken = token_response.json()["access_token"]

header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}

@app.route('/input', methods=["POST", "GET"])
def input():
    if request.method == "POST":
        gender = int(request.form.get('gender'))  # Assuming gender is represented as an integer (e.g., 0 for male, 1 for female)
        School = int(request.form.get('drop'))  # Assuming 'drop' is a numerical identifier for schools
        schoolp = float(request.form.get('schoolPercentage'))
        Interb = int(request.form.get('Iboard'))  # Assuming 'Iboard' is a numerical identifier for intermediate boards
        Interg = int(request.form.get('Interg'))  # Assuming 'Interg' is a numerical identifier for intermediate groups
        Interp = float(request.form.get('Iper'))
        Degreeb = int(request.form.get('Dbranch'))  # Assuming 'Dbranch' is a numerical identifier for degree branches
        Interns = int(request.form.get('Ist'))
        Cgpa = float(request.form.get('Cgpa'))
        skill = int(request.form.get('skills'))
        if(schoolp<=35 or Interp<=35 or Cgpa<=35):
            return render_template('result.html')
        else:

            payload_scoring = {
                "input_data": [{
                    "fields": ["gender", "schoolp", "School", "Interp", "Interb", "Interg", "Degreeb", "Interns", "Cgpa", "skill"],
                    "values": [gender,schoolp,School,Interp,Interb,Interg,Degreeb,Interns,Cgpa,skill]
                }]
            }

            response_scoring = requests.post('https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/03cbe867-0728-44c8-8997-7028e14e0826/predictions?version=2021-05-01',
                                            json=payload_scoring,
                                            headers={'Authorization': 'Bearer ' + mltoken})

            scoring_result = response_scoring.json()
            
          
            
            return render_template('results.html', data=predicted_value)
        
    else:
        return render_template('main1.html')

# ... your other Flask routes ...

if __name__ == '__main__':
    app.run(debug=True)
