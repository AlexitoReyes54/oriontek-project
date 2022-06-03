import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function DirectionCard(props) {

  return (
    <div className="card item">
            <div className="card-body">
              <h5 className="card-title"><FontAwesomeIcon icon={faRoad} />{" "}{props.street}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><FontAwesomeIcon icon={faMailBulk} />{" "} {props.postal_code}</h6>
            </div>
          </div>
  )
}
