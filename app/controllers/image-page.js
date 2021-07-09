import Controller from '@ember/controller';
import { debounce } from '@ember/runloop';

export default class ImagePageController extends Controller {
    _updateFileBlob(cropper) {
    return cropper.getCroppedCanvas({
      maxWidth: 512,
      maxHeight: 512
    }).toBlob((blob) => {
        blob.readAsDataURL()
    });
  },

  actions: {
    crop(cropper) {
      debounce(this, this._updateFileBlob, cropper, 100);
    },
  }
}
// On Progress
