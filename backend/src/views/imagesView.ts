import Image from '../models/Images';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Array<Image>) {
    return images.map((images) => this.render(images));
  },
};
