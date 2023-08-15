import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error,mean_absolute_error # for calculating the cost function
from sklearn.ensemble import RandomForestRegressor # for building the model
import pickle
df = pd.read_csv('Placement_Data_Full_Class.csv')
df = df.fillna(0)
dfx=df.iloc[: ,1:-2]
categorical_columns = dfx.select_dtypes(include=['object']).columns
categorical_columns = dfx.select_dtypes(include=['object']).columns

    # Perform label encoding on categorical columns
for col in categorical_columns:
    dfx[col] = dfx[col].astype('category').cat.codes

    # Select numeric columns for standardization
numeric_columns = dfx.select_dtypes(include=['float64', 'int64']).columns

    # Create a StandardScaler object
scaler = StandardScaler()

    # Fit the scaler on the numeric columns and transform them
dfx[numeric_columns] = scaler.fit_transform(dfx[numeric_columns])
x=dfx.iloc[:,:-1]
y=dfx.iloc[:,-1:]
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.7,random_state=42)
log_clf = LogisticRegression(solver="liblinear", random_state=42)
rnd_clf = RandomForestClassifier(n_estimators=10, random_state=42)
svm_clf = SVC(gamma="auto", random_state=42)
rf=RandomForestClassifier()
voting_clf = VotingClassifier(
        estimators=[('lr', log_clf), ('rf', rnd_clf), ('svc', svm_clf)],
        voting='hard')
voting_clf.fit(x_train, y_train)
pickle.dump(voting_clf,open('predection.pkl','wb'))
    