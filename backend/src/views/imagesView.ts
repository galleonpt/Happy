import Image from '../models/Images';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.1.9/uploads/${image.path}`,
    };
  },

  renderMany(images: Array<Image>) {
    return images.map((images) => this.render(images));
  },
};
