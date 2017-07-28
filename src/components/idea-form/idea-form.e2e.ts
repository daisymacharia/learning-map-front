import { expect } from 'chai';
import nightmare from 'nightmare';

const BASE_URL = 'http://localhost:3000/';

const browser = new nightmare({
  pollInterval: 50,
  show: false,
  typeInterval: 20,
});

describe('Submit Idea Form', function() {
  this.timeout(10000);
  it('checks that the idea contribution form appears on button click', (done) => {
    browser
      .goto(BASE_URL)
      .wait('#landing')
      .click('.dropdown-content a:nth-of-type(2) div')
      .wait('#idea-form')
      .evaluate(() => {
        const ideaForm = document.querySelector('#idea-form');
        return ideaForm ? ideaForm.innerHTML : false;
      })
      .end()
      .then((res) => {
        expect(res).to.be.ok;
        expect(res).to.contain('<h2>CONTRIBUTE AN IDEA</h2>');
        done();
      })
      .catch(() => {
        done(new Error('could not find idea form'));
      });
  });
});
