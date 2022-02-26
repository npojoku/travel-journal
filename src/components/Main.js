import React from "react"

export default function Main(props) {
    return (
        <main>
            <div className="main--container">
                <div>
                    <img src={props.item.imageUrl} className="main--logo" />
                    <p> 
                        <img src="../images/location-logo.png" className="location--logo" />
                        {props.item.location}  	&nbsp;	&nbsp;	
                        <a href={props.item.googleMapsUrl} target="_blank" className="grayFont">View on Google Maps</a>
                    </p>
                    <h1> {props.item.title} </h1>
                    <p className="boldFont">{props.item.startDate} - {props.item.endDate}</p>
                    <p> {props.item.description}</p>
                </div>
            </div>            
        </main>
    )
}