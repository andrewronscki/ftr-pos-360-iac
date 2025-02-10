import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("primeiro-bucket", {
  bucket: "primeiro-test-rocket-seat-andre-wronscki",
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: "segundo-teste-pos-rocketseat",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

// Export the name of the bucket
export const bucketName = bucket.id;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
