import Controller from '@ember/controller';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';

export default class ImagePageController extends Controller {
    _updateFileBlob(cropper) {
    return cropper.getCroppedCanvas({
      maxWidth: 640,
      maxHeight: 360
    }).toBlob((blob) => {
        blob.readAsDataURL()
    });
  }

  @action crop(cropper) {
      debounce(this, this._updateFileBlob, cropper, 100);
    }
}
// On Progress
