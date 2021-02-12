/**
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only 
letters a-z or .. A . means it can represent any one letter.
 */
/**
 * Data Structure: Trie Tree
 * addWord - O(m) - m is the length of the new word
 * search - O(n) - n is the total number of characters in all words
 */
class TrieNode {
  isWord = false;
  children = {}; // <key: charactor, value: TrieNode[]>
}

class WordDictionary {
  root = new TrieNode();
  /**
   * Adds a word into the data structure. 
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let current = this.root;
    for (const char of word) {
      if (current.children[char] === undefined) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isWord = true;
  }
  
  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
   * @param {string} word
   * @return {boolean}
   */
  search(word, i=0, node=this.root) {
    if (i === word.length) return node.isWord;
    if (word[i] === '.') {
      for (const child in node.children) { // child: charater
        if (this.search(word, i+1, node.children[child]) === true) return true;
      }
    }
    if (word[i] in node.children) return this.search(word, i+1, node.children[word[i]]);
    return false;
  }
}

let dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
console.log(dict.search("pad")); // false
console.log(dict.search("bad")); // true
console.log(dict.search(".ad")); // true
console.log(dict.search("b..")); // true