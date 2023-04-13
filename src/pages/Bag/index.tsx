import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { CartItem } from '../../components/CartItem'
import { Summary } from '../../components/Summary'
import { Spinner } from '../../components/Spinner'

import { useData } from '../../services/hooks/useData'

export function Bag() {
  const { data, isLoading } = useData()
  const navigate = useNavigate()

  function toPaymentPage() {
    navigate('/payment')
  }

  if (data && !isLoading) {
    return (
      <>
        <Card>
          {data.items.map((item) => (
            <CartItem key={item.product.sku} showPrice {...item.product} />
          ))}
        </Card>
        <Summary summary={data.summary}>
          <Button variant="primary" onClick={toPaymentPage} aria-label="Follow Payment">
            Seguir para o pagamento
          </Button>
        </Summary>
      </>
    )
  } else {
    return <Spinner />
  }
}