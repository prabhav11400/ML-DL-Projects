import numpy as np
import pickle

# loading the saved model
loaded_model = pickle.load(open('C:/Users/prabh/Dropbox/PC/Downloads/DeployML/trained_model.sav','rb'))

input_data=(2,197,70,45,543,30.5,0.158,53)
# changing input data to a numpy array
input_data_as_numpy_array=np.asarray(input_data)
# reshape the array as we are predicting for one instance : ml required 2D matrix as input
# reshaping will tell the array we just need one datapoint
input_data_reshaped=input_data_as_numpy_array.reshape(1,-1)

# since X test be stardized use kiya gya, so we need to standardize input data first before using as unknown test data
# std_data=scaler.transform(input_data_reshaped)
# print(std_data)

prediction=loaded_model.predict(input_data_reshaped)
print(prediction)

# more beautification :
if(prediction[0]==0):
  print("The person is not diabetic")
else:
  print("The person is diabetic")