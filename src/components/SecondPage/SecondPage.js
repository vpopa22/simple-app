import React, { Component } from 'react';
import './SecondPage.css';

import DialogueContainer from '../DialogContainer/DialogContainer';

class SecondPage extends Component {
  render() {
    return (
      <div className="SecondPage">
          <h4> Title for Second page ! </h4>
          <DialogueContainer>
              <h4> Title for 1st Modal of Second Page !</h4>
              <div>
                  Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.
              </div>
              <DialogueContainer>
                  <h4>Second Modal Second Page</h4>
                  <div>
                      Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.
                  </div>
              </DialogueContainer>
          </DialogueContainer>
      </div>
    );
  }
}

export default SecondPage;
