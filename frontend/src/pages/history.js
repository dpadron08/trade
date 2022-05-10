import React from "react";

function History(props) {

    return (
        <div>
            <div className="masthead">
                <h2 className="fw-light">History of Dura-Europos</h2>
                {/* <p className="lead">A great starter layout for a landing page</p> */}
            </div>
            <section className="py-5">
                <div className="fw-light3">
                The ancient city of Dura-Europos provides a window into the worlds of the Hellenistic and Roman Near East. The city, affectionately dubbed “the Pompeii of the Desert” by its early excavators, prospered from around 300 BCE to 256 CE.
                    This website provides an introduction into one fascinating aspect of life at Dura-Europos – trade.
                    How do objects and ideas make their way from one place to another?
                </div>
                <div className="container2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div className="fw-light2"></div>
                <p></p>
                <div className="fw-light2">History of Dura-Europos, Past and Present</div>
                <p className="para1">  As Dura Europos is a city on the margins, the reconstruction of its history relies on the scant historical references, along with archival sources and inscriptions found in Dura itself. According to inscriptions at Dura-Europos and perhaps Isidore of Charax, the city of Dura was considered to be founded by Seleucus Nicator, a successor of Alexander the Great (Baird 2018: 19). The name Dura derives from the Aramaic word for “fortress”. The city was referred to as Europos by Greek speakers (Baird 2018: 3). Dura-Europos as a name is therefore a modern construction. Very little is known about the Hellenistic period at Dura-Europos (Baird 2018: 19-22). At some point between the end of the 2nd century BCE and the early part of the 1st century BCE, the city came under the control of the Parthians (Baird 2018: 23). The Romans conquered Dura around 165 CE, where it then regained its stature as a military outpost (Baird 2018: 29). The city of Dura was destroyed by the Sasanians in 256 CE, but evidence of limited occupation persists until the end of the 4th century (Baird 2012).</p>
                <p className="para2"> On May 4, 1920, James Henry Breasted (of the University of Chicago’s Oriental Institute) undertook a brief one-day study of the Dura-Europos paintings, which were excavated by workers prior to his arrival (Baird 2018: 4). Franz Cumont, a Belgian archaeologist and historian, led excavations at Dura-Europos between 1922 and 1924, culminating in his publication Fouilles de Doura-Europos (1926). Between the years 1928 and 1937, the Yale-French Joint Excavations of Dura-Europos took place, under the direction of Michael Rostovtzeff. The project ended when the funding dried up in the wake of the Second World War (Baird 2018: 15-16). After a lacuna of sanctioned excavations, the Mission Franco-Syrienne d’Europos-Doura (MFSED), beginning in 1986, aimed to reexamine and preserve previous finds while also starting new excavations (Baird 2018: 16). The project persisted until the start of the Syrian Civil War. Dura-Europos now faces extensive looting.</p>
                <div className="fw-light4">“The Pompeii of the Desert”</div>
                </div>
            </section>
        </div>
    );
}

export default History;
