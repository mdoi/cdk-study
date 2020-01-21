#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStudyStack } from '../lib/cdk-study-stack';

const app = new cdk.App();
new CdkStudyStack(app, 'CdkStudyStack');
