from flask import Flask, render_template, url_for, redirect, request, session
import pickle
import numpy as np
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
app.secret_key = "your_secret_key"

dropdown_options = ["ssc", "Cbse"]

model = pickle.load(open('predection.pkl', 'rb'))
model1 = pickle.load(open('salary.pkl', 'rb'))

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/select')
def select():
    return render_template('select_clg.html')

@app.route('/trend')
def trend():
    return render_template('Clgtrend.html')

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
        inputarray=np.array([[gender,schoolp,School,Interp,Interb,Interg,Degreeb,Interns,Cgpa,skill]])
        # Store input data in session
        session['input_data'] = {
            'gender': gender,
            'School': School,
            'schoolp': schoolp,
            'Interb': Interb,
            'Interg': Interg,
            'Interp': Interp,
            'Degreeb': Degreeb,
            'Interns': Interns,
            'Cgpa': Cgpa,
            'skill': skill
        }

        data11 = model.predict(inputarray)
        d2 = data11[0]
        if d2 == 0:
            return render_template('result.html')
        else:
            data11 = np.array([[gender, schoolp, School, Interp, Interb, Interg, Degreeb, Interns, Cgpa, skill, d2]])
            salary = model1.predict(data11)

            # Reset session input data after prediction
            session.pop('input_data', None)

            return render_template('results.html', data=salary)
    else:
        # Check if input data is in session
        input_data = session.get('input_data', None)
        if input_data:
            return render_template('login.html', input_data=input_data)
        else:
            return render_template('login.html')

@app.route('/<sscs>')
def sample(sscs):
    return f"<h1>{sscs}</h1>"

@app.route('/reg')
def reg():
    reg = 1
    return redirect(url_for('login'))

@app.route('/result')
def result():
    return render_template('results.html')

if __name__ == '__main__':
    app.run(debug=True)
