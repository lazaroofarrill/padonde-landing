import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
	cloud: {
		cloudName: 'lazaroofarrill'
	}
});

export function imgUrl(publicId: string) {
	return cld.image(publicId).format('auto').quality('auto').toURL();
}
