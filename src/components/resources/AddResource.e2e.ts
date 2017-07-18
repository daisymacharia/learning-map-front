import { expect } from 'chai';
import nightmare from 'nightmare';

const BASE_URL = 'http://localhost:3000/';

const browser = new nightmare({
  pollInterval: 100,
  show: false,
  typeInterval: 20,
});

describe('Submit Resource Form', function() {
  this.timeout(10000);
  it('checks that the resource contribution form appears on button click', (done) => {
    browser
      .goto(BASE_URL)
      .wait('#landing')
      .click('.dropdown-content a:nth-of-type(1) div')
      .wait('#form')
      .evaluate(() => {
        const addResourceForm = document.querySelector('#form');
        return addResourceForm ? addResourceForm.innerHTML : false;
      })
      .end()
      .then((res) => {
        /* tslint:disable:no-unused-expression */
        expect(res).to.be.ok;
        expect(res).to.contain('<h2> CONTRIBUTE A RESOURCE </h2>');
        done();
      })
      .catch(() => {
        done(new Error('could not find resource form'));
      });
  });
});