import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor # for building the model
import pickle

from sklearn.ensemble import RandomForestRegressor # for building the model
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
x1=dfx
y1=df.iloc[:,-1:]
x1_train,x1_test,y1_train,y1_test=train_test_split(x1,y1,test_size=0.7,random_state=72)
# X_train, X_test, y_train, y_test

model = RandomForestRegressor( random_state = 10)

# Fitting the Random Forest Regression model to the data
model.fit(x1_train, y1_train)
pickle.dump(model,open('salary.pkl','wb'))
