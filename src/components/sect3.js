import React  from "react";

export default function SectionThree(props) {
    return(
        <ul className="info">
            <h4>Popular Choices</h4>
            <li><a href="https://www.themseattle.com/?gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ36WetZZiR19bhbrGW-1PrZlTBRBzE3jfDv1XvPILOZlybpADmBjGdoaAjMKEALw_wcB"><p>The M</p></a></li>
            <li><a href="https://liveatnolan.com/"><p>Nolan</p></a></li>
            <li><a href="https://www.americancampus.com/student-apartments/wa/seattle/hub-u-district-seattle"><p>Hub U District</p></a></li>
            <li><a href="https://www.americancampus.com/student-apartments/wa/seattle/twelve-at-u-district?utm_source=&utm_medium=&utm_campaign=&utm_content=&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ35CwWGmoIDwZBwOhay81Hyjevry3LN4jxko3NUP1Duc_OHoqqAvITAaApRbEALw_wcB"><p>Twelve at U District</p></a></li>
            <li>...</li>
            <p className="suggest">Find more by searching at this website!</p>
        </ul>
    )
}