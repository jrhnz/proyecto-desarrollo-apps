import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/react'

const RATE = 8 // 8 quetzales por 1 dólar

const Converter: React.FC = () => {
  const [quetzales, setQuetzales] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleConvert = () => {
    setError(null)
    setResult(null)

    const value = parseFloat(quetzales.replace(',', '.'))
    if (isNaN(value) || value <= 0) {
      setError('Ingresa una cantidad válida en quetzales (> 0).')
      return
    }

    const usd = value / RATE
    setResult(usd)
  }

  const handleClear = () => {
    setQuetzales('')
    setResult(null)
    setError(null)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Convertor de Divisas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Cantidad en Quetzales (GTQ)</IonLabel>
          <IonInput
            value={quetzales}
            placeholder="Ej. 100"
            inputMode="decimal"
            onIonChange={(e: any) => setQuetzales(e.detail?.value ?? '')}
          />
        </IonItem>

        <div style={{ marginTop: 16 }}>
          <IonButton expand="block" onClick={handleConvert}>
            Convertir a USD
          </IonButton>
        </div>

          <div style={{ marginTop: 8 }}>
            <IonButton expand="block" color="secondary" onClick={handleClear}>
              Limpiar
            </IonButton>
          </div>

        {error && (
          <IonText color="danger">
            <p style={{ marginTop: 12 }}>{error}</p>
          </IonText>
        )}

        {result !== null && (
          <div style={{ marginTop: 12 }}>
            <IonText color="primary">
              <p>Equivalente en USD: <strong>${result.toFixed(2)}</strong></p>
            </IonText>
          </div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default Converter
