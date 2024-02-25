import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Exemple de données d'entraînement
# Ces données doivent être remplacées par les logs d'activité réels et les résultats des opérations d'arbitrage
data = {
    'feature1': [1, 2, 3, 4, 5],
    'feature2': [5, 4, 3, 2, 1],
    'outcome': [0, 1, 1, 0, 1]
}
df = pd.DataFrame(data)

# Séparation des données en caractéristiques (X) et cible (y)
X = df[['feature1', 'feature2']]
y = df['outcome']

# Séparation des données en ensembles d'entraînement et de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Création et entraînement du modèle
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Prédiction sur l'ensemble de test
predictions = model.predict(X_test)

# Évaluation du modèle
accuracy = accuracy_score(y_test, predictions)
print(f'Accuracy: {accuracy * 100:.2f}%')

# Exemple de prédiction avec de nouvelles données
new_data = [[2, 4]]
new_prediction = model.predict(new_data)
print(f'Prediction for new data {new_data}:', new_prediction)
