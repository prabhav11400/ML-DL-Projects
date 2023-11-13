# -*- coding: utf-8 -*-
"""
Created on Tue Oct 31 23:13:49 2023

@author: prabh
"""

# creating our webapp
import numpy as np
import pickle
import streamlit as st

# loading the saved model
loaded_model = pickle.load(open('C:/Users/prabh/trained_model.sav','rb')) # rb = reading the file in binary formate

# creating a function for prediction
def diabetes_prediction(input_data):
   
    input_data_as_numpy_array=np.asarray(input_data)

    input_data_reshaped=input_data_as_numpy_array.reshape(1,-1)

    prediction=loaded_model.predict(input_data_reshaped)
    print(prediction)

    if(prediction[0]==0):
      return "The person is not diabetic"
    else:
      return "The person is diabetic"
  
# building user interface by steamlit

def main():
    # giving a title 
    st.title('Diabetes Prediction Web App')
    
    # getting the input data from the user
    Pregnancies = st.text_input('Number of Pregnencies')
    Glucose = st.text_input('Glucose Lavel')
    BloodPressure = st.text_input('Blood Pressure value')
    SkinThickness = st.text_input('Skin thickness dalo')
    Insulin = st.text_input('Insulin harmone level')
    BMI = st.text_input('Body Mass Index value')
    DiabetesPedigreeFunction = st.text_input('Diabetes PedigreeFunction')
    Age = st.text_input('Enter your age')
    
    # code for prediction : should be enclosed in main function
    diagnosis = ''
    
    # Creating a button for prediction
    if st.button('Diabetes Test Result'):
        diagnosis = diabetes_prediction([Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age])
        
    st.success(diagnosis)
    
if __name__ =='__main__':
    main()