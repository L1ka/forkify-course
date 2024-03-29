import parentView from './view';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends parentView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
