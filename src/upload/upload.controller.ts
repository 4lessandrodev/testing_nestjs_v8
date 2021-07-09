import { Controller, Get, Query, Version } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller({
	version: '3',
	path: 'upload'
})
export class UploadController {
	constructor (private readonly uploadService: UploadService) { }

	@Get()
	upload (@Query('url') url: string): { url: string; } {
		this.uploadService.uploadToS3(url);
		return { url };
	}
}
