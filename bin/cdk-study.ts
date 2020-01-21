#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStudyStack } from '../lib/cdk-study-stack';
import { CdkStudyNetworkStack } from '../lib/cdk-study-network-stack';

const app = new cdk.App();
new CdkStudyStack(app, 'CdkStudyStack');
new CdkStudyNetworkStack(app, 'CdkStudyNetworkStack', {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: 'ap-northeast-1'
  }
});
