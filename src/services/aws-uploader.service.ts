import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AWSUploader {
	constructor (
		@Inject('AWS_S3_SERVICE')
		private readonly logger: ConsoleLogger) { }
	upload (url: string) {
		this.logger.log(url, 'AWS S3');
	}
}