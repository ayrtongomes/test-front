import styled from 'styled-components'
import { device } from '../../styles/media'

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin: 20px 0;

  @media (${device.tablet}) {
    justify-content: space-between;
  }
`
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const CarItemImage = styled.img`
  height: 60px;
  width: 60px;
`
