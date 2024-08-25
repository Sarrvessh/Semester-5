import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load the dataset
file_path = 'Breast_Cancer.csv'
df = pd.read_csv(file_path)

# Preprocessing
# Drop any columns that are not useful for the model (e.g., survival months)
df = df.drop(columns=['Survival Months'])

# Encoding categorical variables
label_encoders = {}
for column in df.select_dtypes(include=['object']).columns:
    label_encoders[column] = LabelEncoder()
    df[column] = label_encoders[column].fit_transform(df[column])

# Split the data into features and target
X = df.drop(columns=['Status'])
y = df['Status']

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Train a Logistic Regression classifier on original data
clf = LogisticRegression(random_state=42)
clf.fit(X_train, y_train)

# Make predictions and evaluate accuracy before LDA
y_pred = clf.predict(X_test)
accuracy_before_lda = accuracy_score(y_test, y_pred)

# Apply LDA
lda = LDA(n_components=1)
X_train_lda = lda.fit_transform(X_train, y_train)
X_test_lda = lda.transform(X_test)

# Train a Logistic Regression classifier on LDA-transformed data
clf_lda = LogisticRegression(random_state=42)
clf_lda.fit(X_train_lda, y_train)

# Make predictions and evaluate accuracy after LDA
y_pred_lda = clf_lda.predict(X_test_lda)
accuracy_after_lda = accuracy_score(y_test, y_pred_lda)

# Print the accuracies
print("Accuracy of the Logistic Regression model before LDA transformation:", accuracy_before_lda)
print("Accuracy of the Logistic Regression model after LDA transformation:", accuracy_after_lda)
