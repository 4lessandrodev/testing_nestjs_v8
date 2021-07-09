import { Inject, Injectable } from '@nestjs/common';
import { AWSUploader } from '../services/aws-uploader.service';

@Injectable()
export class UploadService {
	constructor (
		@Inject(AWSUploader)
		private readonly aws: AWSUploader
	) { }
	uploadToS3 (url: string): void {
		this.aws.upload(url);
	}
}
