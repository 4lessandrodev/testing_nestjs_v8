import { ConsoleLogger, Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { AWSUploader } from '../services/aws-uploader.service';

@Module({
	controllers: [UploadController],
	providers: [
		{
			provide: 'AWS_S3_SERVICE',
			useFactory: () => new ConsoleLogger()
		},
		AWSUploader,
		UploadService
	]
})
export class UploadModule { }
