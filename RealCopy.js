// ==UserScript==
// @name         RealCopy
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  按住ctrl＋选中即可复制
// @author       Galio
// @match        *://*/*
// @icon         data:image/png;base64,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
// @grant        unsafeWindow
// @updateURL    https://raw.githubusercontent.com/Baicor/TampermonkeyScriptsBox/refs/heads/master/RealCopy.js
// ==/UserScript==

var isCtrlDown = false
var pressTime = 0

function initUserSelect(){
    let allStyle = document.querySelectorAll("head>style")
    for (var i=0; i < allStyle.length; i++) {
        let content = allStyle[i].textContent
        if (content.search('user-select') != -1){
            allStyle[i].textContent = content.replace(/user-select: none/g, "user-select: text")
        }
    }
}

function canCopy(){
    return isCtrlDown && (pressTime > 0 && Date.now() - pressTime > 0) && !hasSelectedTextInInputElement()
}

/**
 * 检测当前焦点是否在可输入元素中，并且有选中的文本
 * 优化版本：减少DOM操作，提高性能
 * @returns {boolean} 是否有选中文本在可输入元素中
 */
function hasSelectedTextInInputElement() {
    // 获取当前选中的文本
    const selection = window.getSelection();
    
    if (!selection || selection.toString().trim() === '') {
        return false;
    }
    
    const activeElement = document.activeElement;
    
    if (activeElement && isInputElement(activeElement)) {
        return true;
    }
    
    if (selection.rangeCount === 0) {
        return false;
    }
    
    try {
        const range = selection.getRangeAt(0);
        const startContainer = range.startContainer;
        
        if (startContainer.nodeType === Node.ELEMENT_NODE) {
            return isInputElement(startContainer);
        }
        
        if (startContainer.nodeType === Node.TEXT_NODE && startContainer.parentElement) {
            return isInputElement(startContainer.parentElement);
        }
    } catch (e) {
        console.warn('RealCopy: Error checking selection range', e);
        return false;
    }
    
    return false;
}

/**
 * 判断元素是否为可输入元素
 * @param {Element} element - 要检查的元素
 * @returns {boolean} 是否为可输入元素
 */
function isInputElement(element) {
    if (!element || !element.tagName) return false;
    
    const tagName = element.tagName.toLowerCase();
    
    if (tagName === 'input') {
        const type = (element.type || 'text').toLowerCase();
        const inputTypes = ['text', 'password', 'email', 'number', 'search', 'tel', 'url'];
        return inputTypes.includes(type);
    }
    
    if (tagName === 'textarea') {
        return true;
    }
    
    if (element.hasAttribute('contenteditable')) {
        return element.getAttribute('contenteditable') === 'true';
    }
    
    return !!element.isContentEditable;
}

(function() {
    'use strict';

    let observer = new MutationObserver(initUserSelect);
    let article = document.body;
    let options = {
        'childList': true,
        'attributes': true,
        'characterData': true,
        'subtree': true
    }
    observer.observe(article, options);

    // 优化点击事件监听器
    document.addEventListener('click', function(e){
        // 快速检查：如果不是Ctrl点击，直接返回
        if (!isCtrlDown) return;
        
        try{
            let clip = window.clipboardData || navigator.clipboard;
            if (!clip || !canCopy()){
                return;
            }
            
            // 获取选中文本前先快速检查是否有选中内容
            const selection = window.getSelection();
            if (!selection || selection.toString().trim() === '') {
                return;
            }
            
            let content = selection.toString();
            if (content){
                content = content.replace(/ /g, ' ')
                clip.writeText(content)
                e.preventDefault()
                e.stopPropagation()
            }
        } catch (error) {
            console.warn('RealCopy: Error copying text', error);
        } finally {
            isCtrlDown = false
            pressTime = 0
        }
    }, true)

    // 优化键盘事件监听器
    document.addEventListener('keydown', function(e){
        // 只监听Ctrl键
        if (e.key === 'Control' || e.ctrlKey) {
            isCtrlDown = true
            pressTime = Date.now()
        }
    }, true)
    
    // 添加键盘释放事件监听器
    document.addEventListener('keyup', function(e){
        if (e.key === 'Control') {
            isCtrlDown = false
            pressTime = 0
        }
    }, true)
    
    // 添加鼠标释放事件监听器，确保状态重置
    document.addEventListener('mouseup', function(){
        // 鼠标释放时重置状态，防止状态残留
        if (!isCtrlDown) {
            pressTime = 0
        }
    }, true)
})();
