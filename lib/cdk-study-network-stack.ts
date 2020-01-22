import * as cdk from '@aws-cdk/core';
import ec2 = require('@aws-cdk/aws-ec2');

export class CdkStudyNetworkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, 'CdkStudyVpc', {
      maxAzs: 1,
      cidr: "10.1.0.0/16",
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'CdkStudySubnetPublic',
          subnetType: ec2.SubnetType.PUBLIC
        }
      ]
    })
  }
}
