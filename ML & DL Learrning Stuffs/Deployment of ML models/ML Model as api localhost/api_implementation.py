# -*- coding: utf-8 -*-
"""
Created on Sun Nov  5 01:33:09 2023

@author: prabh
"""

# checking for api working or not

import json
import requests

# url = 'http://127.0.0.1:8000/diabetes_prediction' : this is for local host use only
url = 'https://6cfb-35-227-91-255.ngrok.io/diabetes_prediction'

'''
input_data_for_model = {
        "Pregnancies" : 1,
        'Glucose' : 85,
        'BloodPressure' : 66,
        'SkinThickness' : 29,
        'Insulin' : 0,
        'BMI' : 26.6,
        'DiabetesPedigreeFunction' : 0.351,
        'Age' : 31
    }
'''
input_data_for_model = {
        "Pregnancies" : 6,
        'Glucose' : 148,
        'BloodPressure' : 72,
        'SkinThickness' : 35,
        'Insulin' : 0,
        'BMI' : 33.6,
        'DiabetesPedigreeFunction' : 0.627,
        'Age' : 50
    }

# convert dictionary into json

input_json = json.dumps(input_data_for_model)

response = requests.post(url,data=input_json)

print(response.text)