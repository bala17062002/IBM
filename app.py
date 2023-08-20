from flask import Flask,render_template,url_for,redirect
import pickle
import numpy as np

model = pickle.load(open('predection.pkl','rb'))

app=Flask(__name__)

@app.route('/')
def welcome(): 
    return render_template('index.html')
@app.route('/select')
def select():
    return render_template('select_clg.html')
@app.route('/reg')
def reg():
    reg=1
    return redirect(url_for('login'))
@app.route('/data')
def data():
     data1 = 1
     data2 = 80
     data3 = 0
     data4 = 85
     data5 = 1
     data6 = 0
     data7 = 1
     data8 = 1
     data9 = 75
     data10 = 1
     arr1 = np.array([[data1,data2,data3,data4,data5,data6,data7,data8,data9,data10]])
     data11=model.predict(arr1)
     return render_template('result.html',data=data11)

if __name__=='__main__':
    app.run(debug=True)