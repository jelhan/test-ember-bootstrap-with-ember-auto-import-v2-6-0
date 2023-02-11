import Application from 'test-ember-bootstrap-with-ember-auto-import-v2-6-0/app';
import config from 'test-ember-bootstrap-with-ember-auto-import-v2-6-0/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
