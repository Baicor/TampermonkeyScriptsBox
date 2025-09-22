// ==UserScript==
// @name         HTTP监控器
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  监控HTTP请求并弹窗警告
// @author       Galio
// @match        *://*/*
// @icon         data:image/x-icon;base64,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
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Baicor/TampermonkeyScriptsBox/refs/heads/master/HttpMonitor.js    
// ==/UserScript==

// 创建样式
function createStyles() {
    const style = document.createElement('style');
    style.textContent = `
            .http-monitor-alert {
                position: fixed !important;
                top: 20px !important;
                right: 20px !important;
                background: #ff4444 !important;
                color: white !important;
                padding: 15px !important;
                border-radius: 8px !important;
                z-index: 999999 !important;
                font-family: Arial, sans-serif !important;
                font-size: 14px !important;
                max-width: 400px !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
                border-left: 4px solid #ff0000 !important;
                animation: slideIn 0.3s ease-out !important;
                transition: all 0.2s ease !important;
            }

            .http-monitor-alert:hover {
                box-shadow: 0 6px 25px rgba(0,0,0,0.4) !important;
                transform: translateY(-2px) !important;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            .http-monitor-close {
                float: right !important;
                font-size: 18px !important;
                font-weight: bold !important;
                cursor: pointer !important;
                margin-left: 10px !important;
            }

            .http-monitor-close:hover {
                opacity: 0.7 !important;
            }

            .http-monitor-copy {
                background: rgba(255,255,255,0.2) !important;
                border: 1px solid rgba(255,255,255,0.3) !important;
                color: white !important;
                padding: 4px 8px !important;
                border-radius: 4px !important;
                cursor: pointer !important;
                font-size: 12px !important;
                margin-left: 8px !important;
                transition: background 0.2s !important;
            }

            .http-monitor-copy:hover {
                background: rgba(255,255,255,0.3) !important;
            }
            .http-monitor-title {
                font-size: 18px !important;
                font-weight: 700 !important;
                margin: 2px 0 10px 0 !important;
                color: #fff !important;
                border-bottom: 1px solid rgba(255,255,255,0.35) !important;
                padding-bottom: 6px !important;
            }
            .http-monitor-section { margin-top: 12px !important; }
            .http-monitor-section-title {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                font-size: 14px !important;
                font-weight: 700 !important;
                letter-spacing: 0.3px !important;
                opacity: 0.98 !important;
                margin-bottom: 6px !important;
                color: #fff !important;
            }
            .http-monitor-section-title::before {
                content: '' !important;
                display: inline-block !important;
                width: 4px !important;
                height: 14px !important;
                background: rgba(255,255,255,0.95) !important;
                border-radius: 2px !important;
            }
            .http-monitor-section-body {
                font-size: 12px !important;
                line-height: 1.5 !important;
                white-space: pre-line !important;
                word-break: break-word !important;
                background: rgba(255,255,255,0.12) !important;
                border-left: 3px solid rgba(255,255,255,0.35) !important;
                padding: 8px 10px !important;
                border-radius: 4px !important;
            }
            .http-monitor-actions { margin-top: 12px !important; display: flex !important; justify-content: flex-end !important; }

            .http-monitor-config-btn {
                position: fixed !important;
                top: 20px !important;
                left: 20px !important;
                background: transparent !important;
                color: white !important;
                border: none !important;
                padding: 0 !important;
                width: 48px !important;
                height: 48px !important;
                border-radius: 50% !important;
                cursor: pointer !important;
                font-size: 0 !important;
                z-index: 999998 !important;
                box-shadow: none !important;
                transition: all 0.3s ease !important;
                user-select: none !important;
                touch-action: none !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
            }

            .http-monitor-config-btn svg{
                width: 100%;
                height: auto;
                background: transparent !important;
                filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
            }

            .http-monitor-config-btn:hover {
                background: transparent !important;
                box-shadow: transparent !important;
                transform: translateY(-2px) !important;
            }

            .http-monitor-config-btn:active {
                cursor: pointer !important;
                transform: scale(0.95) !important;
            }

            .http-monitor-config-btn.dragging {
                cursor: pointer !important;
                opacity: 0.8 !important;
                transform: scale(1.05) !important;
                box-shadow: transparent !important;
            }

            .btn-icon {
                display: block !important;
                font-size: 16px !important;
            }

            .btn-text {
                display: none !important;
            }

            .http-monitor-config-btn:hover .btn-icon {
                display: block !important;
            }

            .http-monitor-config-btn:hover .btn-text {
                display: none !important;
            }

            .http-monitor-config-modal {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: rgba(0,0,0,0.5) !important;
                z-index: 1000000 !important;
                display: flex !important;
                justify-content: center !important;
                align-items: flex-start !important;
                overflow: auto !important;
                padding: 40px 20px !important;
            }

            .http-monitor-config-content {
                top: 0;
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%) !important;
                padding: 30px !important;
                border-radius: 12px !important;
                width: min(90vw, 900px) !important;
                height: auto !important;
                max-height: none !important;
                overflow: visible !important;
                box-shadow: 0 10px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05) !important;
                color: #2c3e50 !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
                /* 允许自由调节大小 */
                resize: both !important;
                min-width: 450px !important;
                min-height: 400px !important;
                backdrop-filter: blur(10px) !important;
            }

            .http-monitor-config-header {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                margin-bottom: 25px !important;
                border-bottom: 2px solid #e9ecef !important;
                padding-bottom: 15px !important;
            }

            .http-monitor-config-title {
                font-size: 22px !important;
                font-weight: 600 !important;
                margin: 0 !important;
                color: #1a1a1a !important;
                letter-spacing: -0.5px !important;
            }

            .http-monitor-config-close {
                background: none !important;
                border: none !important;
                font-size: 28px !important;
                cursor: pointer !important;
                color: #6c757d !important;
                transition: color 0.2s ease !important;
                padding: 4px !important;
                border-radius: 4px !important;
            }

            .http-monitor-config-close:hover {
                color: #495057 !important;
                background: rgba(108, 117, 125, 0.1) !important;
            }

            .http-monitor-config-group {
                margin-bottom: 24px !important;
                padding: 16px !important;
                background: rgba(255, 255, 255, 0.7) !important;
                border-radius: 8px !important;
                border: 1px solid rgba(0, 0, 0, 0.08) !important;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
                transition: all 0.2s ease !important;
            }

            .http-monitor-config-group:hover {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
                border-color: rgba(0, 0, 0, 0.12) !important;
            }

            .http-monitor-config-label {
                display: block !important;
                margin-bottom: 8px !important;
                font-weight: 600 !important;
                color: #2c3e50 !important;
                font-size: 15px !important;
            }

            .http-monitor-config-input {
                width: 80% !important;
                padding: 12px !important;
                border: 1px solid #ced4da !important;
                border-radius: 6px !important;
                font-size: 14px !important;
                box-sizing: border-box !important;
                background: #ffffff !important;
                transition: all 0.2s ease !important;
                color: #495057 !important;
            }

            .http-monitor-config-input:focus {
                border-color: #2196F3 !important;
                box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1) !important;
                outline: none !important;
            }

            .http-monitor-config-textarea {
                width: 100% !important;
                padding: 12px !important;
                border: 1px solid #ced4da !important;
                border-radius: 6px !important;
                font-size: 14px !important;
                box-sizing: border-box !important;
                min-height: 100px !important;
                resize: vertical !important;
                background: #ffffff !important;
                transition: all 0.2s ease !important;
                color: #495057 !important;
                line-height: 1.5 !important;
            }

            .http-monitor-config-textarea:focus {
                border-color: #2196F3 !important;
                box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1) !important;
                outline: none !important;
            }
            .plugin-code-fullscreen {
                position: fixed !important;
                z-index: 1000001 !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                margin: 0 !important;
                border-radius: 0 !important;
                background: #ffffff !important;
            }

            .http-monitor-config-checkbox {
                margin-right: 8px !important;
                width: 16px !important;
                height: 16px !important;
                accent-color: #2196F3 !important;
                cursor: pointer !important;
            }

            .http-monitor-config-checkbox:checked {
                background-color: #2196F3 !important;
            }

            .http-monitor-config-buttons {
                display: flex !important;
                gap: 12px !important;
                justify-content: flex-end !important;
                margin-top: 30px !important;
                padding-top: 20px !important;
                border-top: 1px solid #e9ecef !important;
            }

            .http-monitor-config-btn-save,
            .http-monitor-config-btn-cancel,
            .http-monitor-config-btn-clear,
            .http-monitor-config-btn-reset {
                color: white !important;
                border: none !important;
                padding: 12px 24px !important;
                border-radius: 8px !important;
                cursor: pointer !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease !important;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1) !important;
                min-width: 100px !important;
                text-align: center !important;
            }

            .http-monitor-config-btn-save {
                background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%) !important;
            }

            .http-monitor-config-btn-save:hover {
                background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%) !important;
                box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3) !important;
                transform: translateY(-1px) !important;
            }

            .http-monitor-config-btn-cancel {
                background: linear-gradient(135deg, #f44336 0%, #da190b 100%) !important;
            }

            .http-monitor-config-btn-cancel:hover {
                background: linear-gradient(135deg, #da190b 0%, #c62828 100%) !important;
                box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3) !important;
                transform: translateY(-1px) !important;
            }

            .http-monitor-config-btn-clear {
                background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%) !important;
            }

            .http-monitor-config-btn-clear:hover {
                background: linear-gradient(135deg, #5a6268 0%, #495057 100%) !important;
                box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3) !important;
                transform: translateY(-1px) !important;
            }

            .http-monitor-config-btn-reset {
                background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%) !important;
            }

            .http-monitor-config-btn-reset:hover {
                background: linear-gradient(135deg, #F57C00 0%, #EF6C00 100%) !important;
                box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3) !important;
                transform: translateY(-1px) !important;
            }

            .http-monitor-config-method-list {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 12px !important;
                padding: 12px !important;
                background: rgba(255, 255, 255, 0.6) !important;
                border-radius: 8px !important;
                border: 1px solid rgba(0, 0, 0, 0.08) !important;
            }

            .http-monitor-config-method-item {
                display: flex !important;
                align-items: center !important;
                padding: 8px 12px !important;
                background: rgba(33, 150, 243, 0.1) !important;
                border-radius: 6px !important;
                border: 1px solid rgba(33, 150, 243, 0.2) !important;
                transition: all 0.2s ease !important;
            }

            .http-monitor-config-method-item:hover {
                background: rgba(33, 150, 243, 0.15) !important;
                border-color: rgba(33, 150, 243, 0.3) !important;
            }

            .http-monitor-config-url-patterns {
                max-height: 140px !important;
                overflow-y: auto !important;
                border: 1px solid rgba(0, 0, 0, 0.1) !important;
                border-radius: 8px !important;
                padding: 16px !important;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(249, 249, 249, 0.9) 100%) !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
                margin-bottom: 16px !important;
                backdrop-filter: blur(5px) !important;
            }

            .http-monitor-config-url-pattern {
                display: flex !important;
                align-items: center !important;
                margin-bottom: 10px !important;
                gap: 8px !important;
                padding: 8px !important;
                background: rgba(255, 255, 255, 0.8) !important;
                border-radius: 6px !important;
                border: 1px solid rgba(0, 0, 0, 0.06) !important;
                transition: all 0.2s ease !important;
            }

            .http-monitor-config-url-pattern:hover {
                background: rgba(255, 255, 255, 0.95) !important;
                border-color: rgba(0, 0, 0, 0.1) !important;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05) !important;
            }

            .http-monitor-config-url-pattern input {
                flex: 1 !important;
                margin-right: 0 !important;
                background: transparent !important;
                border: 1px solid rgba(0, 0, 0, 0.1) !important;
                border-radius: 4px !important;
                padding: 8px 12px !important;
                font-size: 13px !important;
            }

            .http-monitor-config-url-pattern input:focus {
                border-color: #2196F3 !important;
                box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1) !important;
                outline: none !important;
            }

            .http-monitor-config-url-pattern button {
                background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%) !important;
                color: white !important;
                border: none !important;
                padding: 6px 12px !important;
                border-radius: 4px !important;
                cursor: pointer !important;
                font-size: 12px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease !important;
                min-width: 60px !important;
            }

            .http-monitor-config-url-pattern button:hover {
                background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%) !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 2px 6px rgba(244, 67, 54, 0.3) !important;
            }

            /* 轻量编辑器与高亮 */
            .plugin-item {
                border: 1px solid #eee !important;
                border-radius: 6px !important;
                padding: 8px !important;
                margin-bottom: 8px !important;
            }
            .plugin-item.http-monitor-conflict {
                border-color: #f44336 !important;
                box-shadow: 0 0 0 2px rgba(244,67,54,0.15) !important;
            }
            .plugin-toolbar {
                display: flex !important;
                gap: 8px !important;
                margin-top: 6px !important;
                justify-content: flex-end !important;
                flex-wrap: wrap !important;
            }
            .plugin-header {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                margin-bottom: 6px !important;
                flex-wrap: wrap !important;
            }
            .plugin-header .plugin-name { flex: 1 1 200px !important; min-width: 160px !important; }
            .plugin-header .plugin-toolbar { margin-top: 0 !important; }
            .plugin-header label { margin: 0 !important; white-space: nowrap !important; }
            .plugin-toolbar button {
                background: #607D8B !important;
                color: #fff !important;
                border: none !important;
                padding: 6px 10px !important;
                border-radius: 3px !important;
                cursor: pointer !important;
                font-size: 12px !important;
            }
            .plugin-toolbar button:hover { opacity: 0.9 !important; }

            .plugin-code-wrapper {
                position: relative !important;
                width: 100% !important;
                gap: 8px !important;
                margin-top: 10px !important;
            }
            .plugin-code-overlay {
                position: absolute !important;
                inset: 0 !important;
                margin: 0 !important;
                overflow: auto !important;
                white-space: pre-wrap !important;
                word-wrap: break-word !important;
                padding: 8px !important;
                border: 1px solid #ddd !important;
                border-radius: 4px !important;
                background: #f7f7f7 !important;
                color: #333 !important;
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                font-size: 12px !important;
                tab-size: 2 !important;
                pointer-events: none !important;
            }
            .plugin-code {
                position: relative !important;
                background: transparent !important;
                color: transparent !important;
                caret-color: #111 !important;
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                font-size: 12px !important;
                line-height: 1.5 !important;
            }

            .plugin-code-fullscreen {
                position: fixed !important;
                z-index: 1000001 !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                margin: 0 !important;
                border-radius: 0 !important;
                background: #ffffff !important;
                padding: 12px !important;
            }
            /* 全屏时显示真实文本并允许编辑；隐藏高亮层 */
            .plugin-code.plugin-code-fullscreen {
                color: #111 !important;
                background: #fff !important;
                position: fixed !important;
                z-index: 1000002 !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                margin: 0 !important;
                border-radius: 0 !important;
                padding: 12px !important;
            }
            .plugin-code-overlay.plugin-code-fullscreen {
                display: none !important;
            }

            /* 自定义插件列表更舒展的布局 */
            .plugin-list {
                max-height: 50vh !important;
                overflow-y: auto !important;
                border: 1px solid #eee !important;
                border-radius: 6px !important;
                padding: 8px !important;
                background: #ffffff !important;
            }
            .plugin-row {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                margin-bottom: 6px !important;
            }
            .plugin-row .plugin-name {
                flex: 1 1 auto !important;
            }
            .plugin-row label {
                margin: 0 !important;
                white-space: nowrap !important;
            }

            /* 关键字高亮（轻量，无外部库） */
            .hl-kw { color: #d73a49 !important; font-weight: bold !important; }
            .hl-str { color: #032f62 !important; }
            .hl-cmt { color: #6a737d !important; font-style: italic !important; }
            .hl-num { color: #005cc5 !important; }
            .hl-builtin { color: #6f42c1 !important; }
            .hl-css-prop { color: #005cc5 !important; }
            .hl-css-val { color: #22863a !important; }
            .hl-css-at { color: #6f42c1 !important; font-weight: bold !important; }
            .hl-css-sel { color: #e36209 !important; }
        `;
    document.head.appendChild(style);
}

/**
 * 检查num是否是数字
 * @param {*} num 
 */
function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

/**
 * 格式化时间
 * @param {*} ms 带转换时间，必须是毫秒
 * @returns 格式化后的时间：形如：1m2s3ms
 */
function formatMilliseconds(ms) {
    if (!isNumber(ms)){
        alert("无效时间：" + ms);
        return;
    }
    let num = Number(ms)
    if (num < 0) {
        alert("时间应该大于0：" + ms);
        return;
    }
    if (num === 0) return '0ms';

    const units = [
        { value: 86400000, label: 'd' },
        { value: 3600000, label: 'h' },
        { value: 60000, label: 'm' },
        { value: 1000, label: 's' },
        { value: 1, label: 'ms' }
    ];

    let result = [];
    let remaining = num;

    for (const unit of units) {
        if (remaining >= unit.value) {
            const count = Math.floor(remaining / unit.value);
            result.push(count + unit.label);
            remaining %= unit.value;

            // 如果剩余为0，提前结束
            if (remaining === 0) break;
        }
    }

    return result.join(" ");
}


/**
 * 字节大小格式化函数
 * @param {*} bytes 待转换的存储值，必须是bytes
 * @returns 
 */
function formatBytes(bytes) {
    if (!isNumber(bytes)) {
        alert("无效存储：" + ms);
        return;
    }
    let num = Number(bytes);
    if (num < 0) {
        alert("存储值应该大于0：" + ms);
        return;
    }

    if (num === 0) return '0B';

    const units = [
        { value: 1099511627776, label: 'TB' }, // 2^40
        { value: 1073741824, label: 'GB' },    // 2^30
        { value: 1048576, label: 'MB' },       // 2^20
        { value: 1024, label: 'KB' },
        { value: 1, label: 'B' }
    ];

    let result = [];
    let remaining = num;

    for (const unit of units) {
        if (remaining >= unit.value) {
            const count = Math.floor(remaining / unit.value);
            result.push(count + unit.label);
            remaining %= unit.value;

            if (remaining === 0) break;
        }
    }

    return result.join(" ");
}


// 配置选项
let CONFIG = {
    // 是否启用监控
    enabled: true,
    // 要监控的URL模式（支持正则表达式）
    urlPatterns: [
        /[a-zA-z]+:\/\/[^\s]*/
    ],
    // 要监控的HTTP方法
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    // 响应体大小限制（字节）
    maxBodySize: 1024 * 1024, // 1MB
    // 请求耗时阈值（毫秒）
    maxDurationMs: 2000,
    // 是否显示详细日志
    verbose: false,
    // 是否排除fetch请求
    excludeFetch: false,
    // 自定义插件源代码（持久化）
    pluginsSource: [],
    // 自定义校验插件（运行时函数）
    plugins: [],
    // 自定义插件元信息（名称、启用、源码）
    pluginsMeta: [],
    // 内置插件开关
    builtinEnabled: {
        httpCode: true,
        sizeLimit: true,
        durationLimit: true,
    },
    // 弹窗样式
    alertStyle: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: '#ff4444',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: '999999',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        maxWidth: '400px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    },
    // 请求信息显示阈值（超过则在弹窗中截断展示，但复制保留完整）
    alertRequestInfoDisplayLimit: 300,
    // Worker 沙箱执行自定义插件（强制开启）
    pluginWorkerEnabled: true,
    // Worker 执行超时（毫秒）
    pluginWorkerTimeoutMs: 60000,
    // fetch 读取超时（毫秒）
    fetchTimeoutMs: 2000,
    // fetch 最大读取字节数（不超过 maxBodySize），和maxBytes取最小
    fetchMaxBytes: 131072
};

function log(...data) {
    if (CONFIG.verbose) console.log("[http-monitor]", ...data);
}

function warn(...data) {
    if (CONFIG.verbose) console.warn("[http-monitor]", ...data);
}

function error(...data){
    if (CONFIG.verbose) console.error("[http-monitor]", ...data);
}

// 从localStorage加载配置
function loadConfig() {
    log('开始加载配置...');

    const saved = localStorage.getItem('httpMonitorConfig');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            log('从localStorage加载的配置:', parsed);

            // 保持 CONFIG 引用不变，避免外部引用失效
            Object.assign(CONFIG, parsed);
            log('合并后的配置:', CONFIG);

            // 反序列化插件
            if (Array.isArray(CONFIG.pluginsSource)) {
                CONFIG.plugins = [];
                CONFIG.pluginsSource.forEach((src, idx) => {
                    const plugin = compilePluginFromSource(src);
                    if (typeof plugin === 'function') CONFIG.plugins.push(plugin);
                    else warn('插件反序列化失败 index=' + idx);
                });
            }

            // 复原 urlPatterns 为 RegExp（若是字符串）
            ensureUrlPatterns();
        } catch (e) {
            warn('配置加载失败，使用默认配置:', e);
        }
    } else {
        log('没有找到保存的配置，使用默认配置');
    }

    // 若存在自定义插件但缺少元信息，补齐默认 meta（名称唯一、启用）
    if (Array.isArray(CONFIG.pluginsSource)) {
        if (!Array.isArray(CONFIG.pluginsMeta) || CONFIG.pluginsMeta.length !== CONFIG.pluginsSource.length) {
            const used = new Set();
            const meta = [];
            CONFIG.pluginsSource.forEach((_, idx) => {
                let base = `plugin_${idx + 1}`;
                let name = base;
                let i = 1;
                while (used.has(name)) { name = `${base}_${i++}`; }
                used.add(name);
                meta.push({ name, enabled: true, executionMode: 'inherit' });
            });
            CONFIG.pluginsMeta = meta;
        }
    }
}

// 检查URL是否匹配监控模式
function shouldMonitor(url) {
    log('检查URL:', url);
    log('URL Pattern:', CONFIG.urlPatterns);

    const result = CONFIG.urlPatterns.some(pattern => {
        if (pattern instanceof RegExp) {
            try { pattern.lastIndex = 0; } catch { }
            const matches = pattern.test(url);
            log(`正则匹配: ${pattern} -> ${url} = ${matches}`);
            return matches;
        }
        const matches = url.includes(pattern);
        log(`字符串匹配: ${pattern} -> ${url} = ${matches}`);
        return matches;
    });

    log('最终结果:', result);
    return result;
}

// 归一化为绝对URL
function toAbsoluteUrl(input) {
    try {
        return new URL(input, location.href).href;
    } catch (e) {
        return input;
    }
}

// 将形如 "/pattern/flags" 的字符串恢复为 RegExp，否则原样返回
function revivePattern(patternLike) {
    if (patternLike instanceof RegExp) return patternLike;
    if (typeof patternLike !== 'string') return patternLike;
    // 尝试解析 /.../flags 形式
    if (patternLike.length >= 2 && patternLike[0] === '/') {
        const lastSlash = patternLike.lastIndexOf('/');
        if (lastSlash > 0) {
            const body = patternLike.slice(1, lastSlash);
            const flags = patternLike.slice(lastSlash + 1);
            try { return new RegExp(body, flags); } catch { }
        }
    }
    return patternLike;
}

// 确保 CONFIG.urlPatterns 为 RegExp 数组
function ensureUrlPatterns() {
    if (!Array.isArray(CONFIG.urlPatterns)) return;
    CONFIG.urlPatterns = CONFIG.urlPatterns.map(p => {
        if (p instanceof RegExp) return p;
        const revived = revivePattern(p);
        if (revived instanceof RegExp) return revived;
        try { return new RegExp(String(p)); } catch { return /.*/; }
    });
}

// 保存配置到localStorage
function saveConfig() {
    try {
        const configToSave = {
            ...CONFIG,
            urlPatterns: CONFIG.urlPatterns.map(pattern => pattern.toString()),
            // 直接保存来源源码与元信息，避免丢失用户书写格式
            pluginsSource: Array.isArray(CONFIG.pluginsSource) ? CONFIG.pluginsSource.slice() : [],
            pluginsMeta: Array.isArray(CONFIG.pluginsMeta) ? CONFIG.pluginsMeta.slice() : []
        };
        localStorage.setItem('httpMonitorConfig', JSON.stringify(configToSave));
    } catch (e) {
        error('配置保存失败:', e);
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            log('已复制到剪贴板');
            return true;
        }).catch(err => {
            error('现代API复制失败:', err);
            return fallbackCopyTextToClipboard(text);
        });
    } else {
        log('使用备用复制方法');
        return fallbackCopyTextToClipboard(text);
    }
}

// 备用复制方法
function fallbackCopyTextToClipboard(text) {
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        textArea.style.pointerEvents = "none";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        if (successful) {
            log('备用方法复制成功');
            return true;
        } else {
            error('备用方法复制失败');
            return false;
        }
    } catch (err) {
        error('备用方法复制异常:', err);
        return false;
    } finally {
        if (textArea && textArea.parentNode) {
            document.body.removeChild(textArea);
        }
    }
}


(function () {
    'use strict';

    // 存储原始fetch函数
    const originalFetch = window.fetch;
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    const originalSendBeacon = typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function'
        ? navigator.sendBeacon.bind(navigator)
        : null;

    // 轻量包装 sendBeacon：仅记录调用信息，不拦截/阻塞
    if (originalSendBeacon) {
        try {
            navigator.sendBeacon = function (url, data) {
                try {
                    const abs = toAbsoluteUrl(url);
                    if (shouldMonitor(abs)) {
                        log('[sendBeacon]', abs, data);
                    }
                } catch { }
                return originalSendBeacon(url, data);
            };
        } catch(e) {
            log('[sendBeacon error]' + e);
        }
    }

    // 告警队列（顶部一个计时，出队后下一个开始）
    const ALERT_QUEUE = [];
    let ALERT_ACTIVE = false;
    const MAX_ALERT_QUEUE = 50;

    function processNextAlert() {
        if (ALERT_ACTIVE) return;
        const task = ALERT_QUEUE.shift();
        if (!task) return;
        ALERT_ACTIVE = true;
        task(() => {
            ALERT_ACTIVE = false;
            processNextAlert();
        });
    }

    // 显示警告弹窗（入队）
    function showAlert(message, responseData) {
        if (!CONFIG.enabled) return;

        // 控制队列长度，避免堆积
        if (ALERT_QUEUE.length >= MAX_ALERT_QUEUE) {
            ALERT_QUEUE.shift();
            warn('[HTTP Monitor] 超过最大告警队列，丢弃最早待处理项');
        }
        ALERT_QUEUE.push((done) => {
            // 统一时间戳与接口名，供显示与导出
            const ts = Date.now();
            const tsStr = new Date(ts).toLocaleString();
            const absoluteUrl = responseData ? toAbsoluteUrl(responseData.url || '') : '';
            let interfaceName = 'request';
            let urlProt = '', urlHost = '', urlPath = '';
            try {
                if (absoluteUrl) {
                    const u = new URL(absoluteUrl);
                    const parts = u.pathname.split('/').filter(Boolean);
                    interfaceName = (parts[parts.length - 1] || u.hostname || 'request').slice(-128);
                    interfaceName = decodeURIComponent(interfaceName).replace(/[^a-zA-Z0-9._-]+/g, '_');
                    if (!interfaceName) interfaceName = 'request';
                    urlProt = (u.protocol || '').replace(/:$/, '');
                    urlHost = u.host || '';
                    urlPath = u.pathname || '';
                }
            } catch { }

            // 准备复制内容与显示内容（请求信息过长时仅显示部分，但复制完整）
            const errorContent = message ? `${message}` : '';
            const fullRequestInfo = responseData && responseData.requestInfo ? String(responseData.requestInfo) : '';
            const REQ_TRUNC_LIMIT = Math.max(50, Number(CONFIG.alertRequestInfoDisplayLimit || 300));
            const displayRequestInfo = fullRequestInfo && fullRequestInfo.length > REQ_TRUNC_LIMIT
                ? `${fullRequestInfo.slice(0, REQ_TRUNC_LIMIT)}…(已省略${fullRequestInfo.length - REQ_TRUNC_LIMIT}字)`
                : fullRequestInfo;

            const httpMetaContentFull = responseData ?
                `时间: ${tsStr} (${ts})\n` +
                (absoluteUrl ? `URL: ${absoluteUrl}\n` : '') +
                (urlProt ? `Prot: ${urlProt}\n` : '') +
                (urlHost ? `Host: ${urlHost}\n` : '') +
                (urlPath ? `Path: ${urlPath}\n` : '') +
                `状态: ${responseData.status}\n` +
                `方法: ${responseData.method}\n` +
                `大小: ${formatBytes(responseData.size)}\n` +
                `耗时: ${formatMilliseconds(responseData.durationMs)}\n` +
                (fullRequestInfo ? `参数: ${fullRequestInfo}\n` : '') : `HTTP元信息为空`;

            const httpMetaContentDisplay = responseData ?
                `时间: ${tsStr} (${ts})\n` +
                (urlProt ? `Prot: ${urlProt}\n` : '') +
                (urlHost ? `Host: ${urlHost}\n` : '') +
                (urlPath ? `Path: ${urlPath}\n` : '') +
                `状态: ${responseData.status}\n` +
                `方法: ${responseData.method}\n` +
                `大小: ${formatBytes(responseData.size)}\n` +
                `耗时: ${formatMilliseconds(responseData.durationMs)}\n` +
                (displayRequestInfo ? `参数: ${displayRequestInfo}\n` : '') : `HTTP元信息为空`;

            const copyContent = errorContent + '\n' + httpMetaContentFull;

            // 创建Shadow DOM隔离的弹窗元素
            const alertContainer = document.createElement('div');
            const shadowRoot = alertContainer.attachShadow({ mode: 'open' });

            // 添加样式
            const style = document.createElement('style');
            style.textContent = `
            .http-monitor-alert {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff4444;
                color: white;
                padding: 10px;
                border-radius: 5px;
                z-index: 999999;
                font-family: Arial, sans-serif;
                font-size: 14px;
                max-width: 400px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            }
            .http-monitor-close {
                position: absolute;
                top: 5px;
                right: 10px;
                cursor: pointer;
                font-size: 20px;
                font-weight: bold;
            }
            .http-monitor-title {
                font-weight: bold;
                margin-bottom: 10px;
                font-size: 16px;
            }
            .http-monitor-section {
                margin-bottom: 10px;
            }
            .http-monitor-section-title {
                font-weight: bold;
                margin-bottom: 5px;
                font-size: 12px;
                opacity: 0.8;
            }
            .http-monitor-section-body {
                background: rgba(255,255,255,0.1);
                padding: 8px;
                border-radius: 3px;
                font-family: monospace;
                font-size: 12px;
                white-space: pre-wrap;
                word-break: break-all;
            }
            .http-monitor-actions {
                display: flex;
                gap: 8px;
                margin-top: 10px;
            }
            .http-monitor-copy {
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                padding: 5px 10px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 12px;
            }
            .http-monitor-copy:hover {
                background: rgba(255,255,255,0.3);
            }
        `;

            const alertDiv = document.createElement('div');
            alertDiv.className = 'http-monitor-alert';
            alertDiv.innerHTML = `
                <span class="http-monitor-close">&times;</span>
                <div class="http-monitor-title">HTTP响应监控告警</div>
                <div class="http-monitor-section">
                    <div class="http-monitor-section-title">错误信息</div>
                    <div class="http-monitor-section-body">${errorContent}</div>
                </div>
                <div class="http-monitor-section">
                    <div class="http-monitor-section-title">HTTP元信息</div>
                    <div class="http-monitor-section-body">${httpMetaContentDisplay}</div>
                </div>
                <div class="http-monitor-actions">
            <button class="http-monitor-copy" id="copy-btn-${Date.now()}">复制</button>
                    <button class="http-monitor-copy" id="har-btn-${Date.now()}" style="margin-left:8px !important; background: rgba(255,255,255,0.25) !important;">导出HAR</button>
                </div>
        `;

            shadowRoot.appendChild(style);
            shadowRoot.appendChild(alertDiv);

            // 添加复制和导出按钮事件监听器
            const copyBtn = shadowRoot.querySelector('.http-monitor-copy');
            const harBtn = shadowRoot.querySelector(`[id^=har-btn-]`);
            copyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const success = copyToClipboard(copyContent);
                const originalText = copyBtn.textContent;
                const originalStyle = copyBtn.style.background;
                if (success) { copyBtn.textContent = '已复制!'; copyBtn.style.background = 'rgba(76, 175, 80, 0.8)'; copyBtn.style.color = 'white'; }
                else { copyBtn.textContent = '复制失败'; copyBtn.style.background = 'rgba(244, 67, 54, 0.8)'; copyBtn.style.color = 'white'; }
                setTimeout(() => { copyBtn.textContent = originalText; copyBtn.style.background = originalStyle; copyBtn.style.color = 'white'; }, 2000);
            });
            if (harBtn) {
                harBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    try {
                        const har = {
                            log: {
                                version: '1.2',
                                creator: { name: 'HTTP Monitor Userscript', version: '1.0' },
                                entries: [responseData ? {
                                    startedDateTime: new Date(ts).toISOString(),
                                    time: typeof responseData.durationMs === 'number' ? responseData.durationMs : 0,
                                    request: {
                                        method: responseData.method || '',
                                        url: absoluteUrl,
                                        httpVersion: 'HTTP/1.1',
                                        headers: [],
                                        queryString: [],
                                        cookies: [],
                                        headersSize: -1,
                                        bodySize: -1,
                                        postData: responseData.requestInfo ? { mimeType: 'application/json', text: String(responseData.requestInfo) } : undefined
                                    },
                                    response: {
                                        status: responseData.status || 0,
                                        statusText: '',
                                        httpVersion: 'HTTP/1.1',
                                        headers: [],
                                        cookies: [],
                                        content: { size: typeof responseData.size === 'number' ? responseData.size : -1, mimeType: '', text: '' },
                                        redirectURL: '',
                                        headersSize: -1,
                                        bodySize: typeof responseData.size === 'number' ? responseData.size : -1
                                    },
                                    cache: {},
                                    timings: { send: 0, wait: typeof responseData.durationMs === 'number' ? responseData.durationMs : 0, receive: 0 }
                                } : {}]
                            }
                        };
                        const blob = new Blob([JSON.stringify(har, null, 2)], { type: 'application/json;charset=utf-8' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url; a.download = `${interfaceName || 'request'}-${ts}.har`;
                        document.body.appendChild(a); a.click(); a.remove();
                        URL.revokeObjectURL(url);
                    } catch (err) {
                        error('导出HAR失败', err);
                    }
                });
            }

            // 添加到页面
            document.body.appendChild(alertContainer);

            // 只有队首 alert 计时，其它等待队列
            const AUTO_REMOVE_DELAY = 5000;
            let finished = false;
            let mo = null;
            const finishOnce = () => {
                if (finished) return;
                finished = true;
                try { if (mo) { try { mo.disconnect(); } catch { } mo = null; } } catch { }
                try { alertContainer.remove(); } finally { done(); }
            };
            let timer = setTimeout(finishOnce, AUTO_REMOVE_DELAY);

            // 悬停暂停，移出继续
            alertDiv.addEventListener('mouseenter', () => { if (timer) { clearTimeout(timer); timer = null; } });
            alertDiv.addEventListener('mouseleave', () => { if (!timer && !finished) { timer = setTimeout(finishOnce, AUTO_REMOVE_DELAY); } });

            // 关闭按钮：移除并推进队列
            const closeBtn = shadowRoot.querySelector('.http-monitor-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    if (timer) { clearTimeout(timer); timer = null; }
                    finishOnce();
                });
            }

            // 兜底：如被外部代码移除，推进队列
            mo = new MutationObserver((mutations) => {
                if (!document.body.contains(alertContainer)) {
                    if (timer) { clearTimeout(timer); timer = null; }
                    try { if (mo) mo.disconnect(); } catch { }
                    finishOnce();
                }
            });
            mo.observe(document.body, { childList: true, subtree: true });

            log('HTTP响应监控:', message, responseData);
        });
        processNextAlert();
    }

    // 解析响应体
    function parseResponseBody(response, body) {
        try {
            const contentType = response.headers.get('content-type') || '';
            let parsedBody = null;

            if (contentType.includes('application/json')) {
                parsedBody = JSON.parse(body);
            } else if (contentType.includes('text/')) {
                parsedBody = body;
            } else if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
                // 简单的XML解析
                parsedBody = body;
            }

            return {
                contentType,
                parsedBody,
                rawBody: body,
                size: body.length
            };
        } catch (error) {
            return {
                contentType: response.headers.get('content-type') || 'unknown',
                parsedBody: null,
                rawBody: body,
                size: body.length,
                error: error.message
            };
        }
    }

    // 默认内置插件
    const builtInPlugins = [

        Object.assign(function hpptCodePlugin({ httpStatus }) {
            if (httpStatus < 200 || httpStatus >= 400) {
                return [`HTTP状态码错误: ${httpStatus}`];
            }
            return [];
        }, { __name: 'httpCode', __title: 'HTTP状态码检查' }),

        Object.assign(function sizeLimitPlugin({ sizeBytes }) {
            if (sizeBytes > CONFIG.maxBodySize) {
                return [`响应体过大: ${formatBytes(sizeBytes)}`];
            }
            return [];
        }, { __name: 'sizeLimit', __title: '响应体大小限制' }),
        Object.assign(function durationLimitPlugin({ durationMs }) {
            if (typeof durationMs === 'number' && durationMs > CONFIG.maxDurationMs) {
                return [`请求耗时过长: ${formatMilliseconds(durationMs)}`];
            }
            return [];
        }, { __name: 'durationLimit', __title: '请求耗时限制' }),
    ];

    // 将插件源码编译为可执行函数
    function compilePluginFromSource(src) {
        try {
            const trimmed = String(src || '').trim();
            // 兼容旧格式：完整函数签名
            if (/^(function|\()/i.test(trimmed)) {
                const fn = new Function('return (' + trimmed + ')')();
                if (typeof fn === 'function') return fn;
            }
            // 新格式：仅写函数主体，由框架包裹
            const wrapped = `return function(ctx){\n  const { httpStatus, durationMs, sizeBytes, body, rawBody, contentType } = ctx;\n  const warnings = [];\n  try {\n${trimmed}\n  } catch (e) {}\n  return warnings;\n}`;
            return new Function(wrapped)();
        } catch (e) {
            warn('插件编译失败:', e);
            return null;
        }
    }

    // Worker 沙箱：单例 worker
    let pluginWorker = null;
    let pluginWorkerBusy = false;
    function ensurePluginWorker() {
        if (pluginWorker) return pluginWorker;
        const workerCode = `self.onmessage = async (e)=>{\n  const { id, sources, context } = e.data || {};\n  try {\n    // 编译所有插件为函数数组\n    const fns = (Array.isArray(sources)?sources:[]).map((src)=>{\n      const s = String(src||'').trim();\n      try{\n        if (/^(function|\\()/i.test(s)) { return (new Function('return ('+s+')'))(); }\n        const wrapped = 'return function(ctx){\\n  const { httpStatus, durationMs, sizeBytes, body, rawBody, contentType } = ctx;\\n  const warnings = [];\\n  try {\\n'+s+'\\n  } catch (e) {}\\n  return warnings;\\n}';\n        return (new Function(wrapped))();\n      }catch(err){ return null; }\n    }).filter(fn=>typeof fn==='function');\n    // 执行\n    const warnings = [];\n    for (let i=0;i<fns.length;i++){\n      try {\n        const res = fns[i](context) || [];\n        for (const w of res) warnings.push(w);\n      } catch(err){}\n    }\n    self.postMessage({ id, ok:true, warnings });\n  } catch(err){\n    self.postMessage({ id, ok:false, error: String(err) });\n  }\n};`;
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        pluginWorker = new Worker(url);
        URL.revokeObjectURL(url);
        return pluginWorker;
    }

    // HTML转义
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // 轻量语法高亮（JS/CSS 简单启发式）
    function highlightCodeToHtml(code) {
        const raw = String(code || '');
        const isLikelyCss = /[:][^;{}]+;/.test(raw) && /\{[^}]*\}/.test(raw) && !/function\s|const\s|let\s|var\s/.test(raw);
        let s = escapeHtml(raw);

        // 通用：先处理注释与字符串，使用占位防止重复匹配
        const placeholders = [];
        function ph(type, text) {
            const id = `__PH_${placeholders.length}__`;
            placeholders.push({ id, type, text });
            return id;
        }
        // 多行注释
        s = s.replace(/\/\*[\s\S]*?\*\//g, m => ph('cmt', m));
        // 单行注释
        s = s.replace(/(^|\n)\s*\/\/.*(?=\n|$)/g, m => ph('cmt', m));
        // 字符串
        s = s.replace(/(['"])((?:\\.|(?!\1).)*)\1/g, (m) => ph('str', m));
        // 数字
        s = s.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="hl-num">$1</span>');

        if (isLikelyCss) {
            // @规则
            s = s.replace(/@\w+/g, '<span class="hl-css-at">$&</span>');
            // 选择器：类与ID
            s = s.replace(/(\.|#)[a-zA-Z_][\w-]*/g, '<span class="hl-css-sel">$&</span>');
            // 属性名: 冒号前的部分
            s = s.replace(/([a-zA-Z-]+)(\s*:\s*)/g, '<span class="hl-css-prop">$1</span>$2');
            // 颜色值与单位值
            s = s.replace(/(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}))/g, '<span class="hl-css-val">$1</span>');
            s = s.replace(/\b(\d+(?:\.\d+)?)(px|em|rem|vh|vw|%)\b/g, '<span class="hl-css-val">$1$2</span>');
        } else {
            // JS 关键字
            s = s.replace(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|in|instanceof|typeof|void)\b/g, '<span class="hl-kw">$1</span>');
            // 内置对象/上下文提示
            s = s.replace(/\b(JSON|Date|Math|Array|Object|String|Number|Boolean|RegExp|warnings|httpStatus|durationMs|sizeBytes|body|rawBody|contentType)\b/g, '<span class="hl-builtin">$1</span>');
        }

        // 还原注释与字符串
        for (const { id, type, text } of placeholders) {
            const cls = type === 'cmt' ? 'hl-cmt' : 'hl-str';
            s = s.replace(id, `<span class="${cls}">${escapeHtml(text)}</span>`);
        }
        return s;
    }

    // 为单个插件编辑器节点绑定行为（高亮、全屏、格式化、名称校验）
    function attachPluginEditorBehavior(shadowRoot, itemNode) {
        if (!itemNode) return;
        const nameInput = itemNode.querySelector('.plugin-name');
        const codeArea = itemNode.querySelector('.plugin-code');
        const overlay = itemNode.querySelector('.plugin-code-overlay');
        const fullscreenBtn = itemNode.querySelector('.plugin-fullscreen-btn');
        const formatBtn = itemNode.querySelector('.plugin-format-btn');

        // 初始化高亮
        if (overlay && codeArea) {
            overlay.innerHTML = highlightCodeToHtml(codeArea.value);
            codeArea.addEventListener('input', () => {
                overlay.innerHTML = highlightCodeToHtml(codeArea.value);
                // 同步高度
                overlay.scrollTop = codeArea.scrollTop;
            });
            codeArea.addEventListener('scroll', () => {
                overlay.scrollTop = codeArea.scrollTop;
            });
            // 双击覆盖层进入/退出全屏
            overlay.addEventListener('dblclick', (e) => {
                e.preventDefault(); e.stopPropagation();
                codeArea.classList.toggle('plugin-code-fullscreen');
                codeArea.focus();
            });
        }

        // 全屏切换
        if (fullscreenBtn && codeArea && overlay) {
            const toggleFull = () => {
                const wrapper = codeArea.closest('.plugin-code-wrapper');
                codeArea.classList.toggle('plugin-code-fullscreen');
                if (wrapper) wrapper.classList.toggle('plugin-code-fullscreen');
                codeArea.focus();
            };
            fullscreenBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggleFull(); });
            // Esc 退出全屏
            codeArea.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && codeArea.classList.contains('plugin-code-fullscreen')) {
                    e.stopPropagation();
                    toggleFull();
                }
            });
        }

        // 格式化
        if (formatBtn && codeArea && overlay) {
            formatBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                codeArea.value = formatPluginSource(codeArea.value);
                overlay.innerHTML = highlightCodeToHtml(codeArea.value);
            });
        }

        // 名称实时校验（冲突标记在外层）
        if (nameInput) {
            nameInput.addEventListener('input', () => {
                validatePluginNames(shadowRoot);
            });
        }
    }

    function validatePluginNames(shadowRoot) {
        const nodes = Array.from(shadowRoot.querySelectorAll('#config-plugins .plugin-item'));
        const nameToNodes = new Map();
        nodes.forEach(node => {
            const name = (node.querySelector('.plugin-name')?.value || '').trim();
            if (!name) return;
            if (!nameToNodes.has(name)) nameToNodes.set(name, []);
            nameToNodes.get(name).push(node);
        });
        // 清除标记
        nodes.forEach(n => n.classList.remove('http-monitor-conflict'));
        shadowRoot.querySelectorAll('#config-plugins .plugin-name').forEach(inp => {
            inp.style.borderColor = '';
        });
        // 标记冲突
        let hasConflict = false;
        for (const [name, list] of nameToNodes.entries()) {
            if (list.length > 1) {
                hasConflict = true;
                list.forEach(node => {
                    node.classList.add('http-monitor-conflict');
                    const inp = node.querySelector('.plugin-name');
                    if (inp) inp.style.borderColor = '#f44336';
                });
            }
        }
        return hasConflict;
    }

    function rebuildPluginsUI(shadowRoot) {
        const container = shadowRoot.querySelector('#config-plugins');
        if (!container) return;
        container.innerHTML = (CONFIG.pluginsMeta || []).map((meta, index) => `
            <div class="http-monitor-config-url-pattern plugin-item" data-index="${index}">
                <input type="text" class="http-monitor-config-input plugin-name" value="${(meta.name || '').replace(/"/g, '&quot;')}" placeholder="插件名称（唯一）" style="margin-bottom:6px;">
                <label style="display:block;margin-bottom:6px;"><input type="checkbox" class="plugin-enabled" ${meta.enabled !== false ? 'checked' : ''}> 启用</label>
                <div class="plugin-code-wrapper">
                    <pre class="plugin-code-overlay"></pre>
                    <textarea class="http-monitor-config-textarea plugin-code" placeholder="// 仅填写主体，无需 function/return\n//warnings是数组，用来存放告警文本\n// 可用: httpStatus, durationMs, sizeBytes, body, rawBody, contentType\nif (httpStatus >= 500) {\n  warnings.push('服务异常');\n}">${(CONFIG.pluginsSource && CONFIG.pluginsSource[index]) || ''}</textarea>
                </div>
                <div class="plugin-toolbar">
                    <button class="remove-plugin-btn">删除</button>
                    <button class="plugin-format-btn">格式化</button>
                    <button class="plugin-fullscreen-btn">全屏/还原</button>
                </div>
            </div>
        `).join('');
        // 绑定事件
        container.querySelectorAll('.plugin-item').forEach(item => {
            const removeBtn = item.querySelector('.remove-plugin-btn');
            if (removeBtn) {
                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    item.remove();
                    validatePluginNames(shadowRoot);
                });
            }
            attachPluginEditorBehavior(shadowRoot, item);
        });
    }

    // 简易格式化（占位方案）
    function formatPluginSource(src) {
        try {
            const lines = String(src || '').split('\n');
            let depth = 0;
            return lines.map(l => {
                const t = l.trim();
                if (t.startsWith('}') || t.startsWith('];') || t === '}') depth = Math.max(0, depth - 1);
                const indented = '  '.repeat(depth) + t;
                if (t.endsWith('{')) depth++;
                return indented;
            }).join('\n');
        } catch { return src; }
    }

    // 运行插件以检查响应体内容
    async function checkResponseContent(parsedData, meta) {
        const warnings = [];

        const context = {
            httpStatus: meta && typeof meta.status === 'number' ? meta.status : undefined,
            durationMs: meta && typeof meta.durationMs === 'number' ? meta.durationMs : undefined,
            sizeBytes: parsedData.size,
            body: parsedData.parsedBody,
            rawBody: parsedData.rawBody,
            contentType: parsedData.contentType
        };

        // 先跑内置插件（按开关）
        for (const plugin of builtInPlugins) {
            try {
                const key = plugin.__name || 'builtin';
                if (CONFIG.builtinEnabled && CONFIG.builtinEnabled[key] === false) continue;
                const t0 = performance.now();
                const result = plugin(context) || [];
                const dt = performance.now() - t0;
                if (dt > 50) warn(`[plugin-slow] builtin ${key} took ${Math.round(dt)}ms`);
                for (const w of result) warnings.push(w);
            } catch (e) {
                warn('插件执行错误(built-in):', e);
            }
        }

        // 再跑用户自定义插件（按开关）
        if (Array.isArray(CONFIG.plugins) && Array.isArray(CONFIG.pluginsMeta)) {
            // 分组：reuse/spawn 以及 inherit->跟随全局（pluginWorkerEnabled?reuse:main）
            const reuseSources = [];
            const spawnSources = [];
            const mainThreadIdx = [];
            CONFIG.pluginsMeta.forEach((m, i) => {
                const src = CONFIG.pluginsSource && typeof CONFIG.pluginsSource[i] === 'string' ? CONFIG.pluginsSource[i] : null;
                if (!src || !m || m.enabled === false) return;
                const mode = m.executionMode || 'inherit';
                if (mode === 'spawn') spawnSources.push({ src, meta: m, idx: i });
                else if (mode === 'reuse' || (mode === 'inherit' && CONFIG.pluginWorkerEnabled)) reuseSources.push({ src, meta: m, idx: i });
                else mainThreadIdx.push(i);
            });

            // 1) reuse 组：单 Worker 执行
            if (reuseSources.length > 0) {
                try {
                    const w = ensurePluginWorker();
                    const reqId = 'w_' + Math.random().toString(36).slice(2);
                    const timeoutMs = Math.max(1000, Number(CONFIG.pluginWorkerTimeoutMs || 60000));
                    const p = new Promise((resolve) => {
                        const onMsg = (ev) => {
                            const data = ev.data || {};
                            if (data.id === reqId) {
                                w.removeEventListener('message', onMsg);
                                resolve(data);
                            }
                        };
                        w.addEventListener('message', onMsg);
                        w.postMessage({ id: reqId, sources: reuseSources.map(r => r.src), context });
                    });
                    let out = null; let timed = false;
                    const timer = setTimeout(() => { try { w.terminate(); } catch { } out = { ok: false, error: 'timeout' }; timed = true; pluginWorker = null; }, timeoutMs);
                    out = await p;
                    clearTimeout(timer);
                    if (out && out.ok && Array.isArray(out.warnings)) {
                        for (const ww of out.warnings) warnings.push(ww);
                    } else if (timed) {
                        warn('[plugin-worker] execution timeout');
                    }
                } catch (e) {
                    warn('[plugin-worker] failed, fallback main thread:', e);
                    mainThreadIdx.push(...reuseSources.map(r => r.idx));
                }
            }

            // 2) spawn 组：逐个创建临时 Worker
            for (const item of spawnSources) {
                try {
                    const blobUrl = URL.createObjectURL(new Blob([`self.onmessage=e=>{const{ id,src,ctx }=e.data||{};try{let fn=null;const s=String(src||'').trim();if(/^(function|\\()/i.test(s)){fn=(new Function('return ('+s+')'))();}else{const w='return function(ctx){\\n  const { httpStatus, durationMs, sizeBytes, body, rawBody, contentType } = ctx;\\n  const warnings = [];\\n  try {\\n'+s+'\\n  } catch (e) {}\\n  return warnings;\\n}';fn=(new Function(w))();}const res=fn?fn(ctx)||[]:[];self.postMessage({id,ok:true,warnings:res});}catch(err){self.postMessage({id,ok:false,error:String(err)})}};`], { type: 'application/javascript' }));
                    const worker = new Worker(blobUrl);
                    const execId = 's_' + Math.random().toString(36).slice(2);
                    const timeoutMs = Math.max(1000, Number(item.meta.timeoutMs || CONFIG.pluginWorkerTimeoutMs || 60000));
                    const pr = new Promise((resolve) => {
                        const onMsg = (ev) => { const d = ev.data || {}; if (d.id === execId) { worker.removeEventListener('message', onMsg); resolve(d); } };
                        worker.addEventListener('message', onMsg);
                        worker.postMessage({ id: execId, src: item.src, ctx: context });
                    });
                    let res = null; let timed2 = false; const tmr = setTimeout(() => { try { worker.terminate(); } catch { } try { URL.revokeObjectURL(blobUrl); } catch { } res = { ok: false, error: 'timeout' }; timed2 = true; }, timeoutMs);
                    res = await pr; clearTimeout(tmr); try { worker.terminate(); } catch { } try { URL.revokeObjectURL(blobUrl); } catch { }
                    if (res && res.ok && Array.isArray(res.warnings)) { for (const ww of res.warnings) warnings.push(ww); }
                    else if (timed2) warn('[plugin-worker-spawn] timeout for', item.meta.name || item.idx);
                } catch (e) { warn('[plugin-worker-spawn] failed:', e); }
            }

            // 3) 主线程执行剩余（inherit 走非 Worker、或 worker 失败回退）
            CONFIG.plugins.forEach((plugin, idx) => {
                if (mainThreadIdx.indexOf(idx) === -1) return;
                if (typeof plugin !== 'function') return;
                const meta = CONFIG.pluginsMeta[idx] || {};
                if (meta.enabled === false) return;
                try {
                    const t0 = performance.now();
                    const result = plugin(context) || [];
                    const dt = performance.now() - t0;
                    if (dt > 50) warn(`[plugin-slow] custom ${meta.name || idx} took ${Math.round(dt)}ms`);
                    for (const w of result) warnings.push(w);
                } catch (e) { warn('插件执行错误(custom):', e); }
            });
        }

        return warnings;
    }

    // 拦截fetch请求
    window.fetch = async function (...args) {
        // 如果配置了排除fetch请求，直接返回原始fetch
        if (CONFIG.excludeFetch) {
            return originalFetch.apply(this, args);
        }

        const [resource, options = {}] = args;
        const rawUrl = typeof resource === 'string' ? resource : resource.url;
        const url = toAbsoluteUrl(rawUrl);
        const method = options.method || 'GET';

        if (!shouldMonitor(url) || !CONFIG.methods.includes(method)) {
            return originalFetch.apply(this, args);
        }

        // 跳过 keepalive（卸载阶段 fire-and-forget，不应阻塞）
        if (options && options.keepalive === true) {
            return originalFetch.apply(this, args);
        }

        try {
            const response = await originalFetch.apply(this, args);
            const responseClone = response.clone();

            // 后台异步分析，避免阻塞返回值（对流式响应设置超时与字节上限）
            setTimeout(async () => {
                try {
                    // 处理 opaque 跨域响应：不可读 body，直接跳过
                    if (response && response.type === 'opaque') {
                        return;
                    }

                    const contentType = response.headers.get('content-type') || '';
                    const contentLengthHeader = response.headers.get('content-length');
                    const contentLength = contentLengthHeader ? Number(contentLengthHeader) : 0;
                    const isEventStream = /text\/event-stream/i.test(contentType);
                    // 根据请求 Accept 判断 SSE
                    let isSSEByAccept = false;
                    try {
                        const reqHeaders = options && options.headers ? options.headers : (resource && resource.headers);
                        if (reqHeaders) {
                            const acceptVal = (typeof reqHeaders.get === 'function')
                                ? (reqHeaders.get('accept') || reqHeaders.get('Accept') || '')
                                : (typeof reqHeaders === 'object' ? (reqHeaders['accept'] || reqHeaders['Accept'] || '') : '');
                            if (acceptVal && /text\/event-stream/i.test(String(acceptVal))) {
                                isSSEByAccept = true;
                            }
                        }
                    } catch { }

                    // 明确的流式类型直接跳过读取
                    if (isEventStream || isSSEByAccept) return;

                    // 仅按头部尺寸超限时做快速告警
                    if (contentLength && contentLength > CONFIG.maxBodySize) {
                        const parsedData = { contentType, parsedBody: null, rawBody: '', size: contentLength };
                        const warnings = await checkResponseContent(parsedData, { status: response.status, durationMs: 0 });
                        if (warnings.length > 0) {
                            const message = warnings.join('\n******\n');
                            showAlert(message, {
                                url,
                                status: response.status,
                                size: contentLength,
                                method,
                                durationMs: 0,
                                requestInfo: (() => { try { const u = new URL(url); const qp = u.search ? `query=${u.search.slice(1)}` : ''; return qp; } catch { return '' } })()
                            });
                        }
                        return;
                    }

                    const startTs = performance.now();
                    let totalBytes = 0;
                    let bodyText = '';
                    const maxBytes = Math.min(CONFIG.maxBodySize, Number(CONFIG.fetchMaxBytes || CONFIG.maxBodySize));
                    const timeoutMs = Math.max(500, Number(CONFIG.fetchTimeoutMs || 2000));
                    const reader = responseClone.body && responseClone.body.getReader ? responseClone.body.getReader() : null;

                    if (reader && typeof TextDecoder !== 'undefined') {
                        const decoder = new TextDecoder('utf-8');
                        let timeoutId = null;
                        await new Promise(async (resolve) => {
                            timeoutId = setTimeout(() => { try { reader.cancel(); } catch { } resolve(); }, timeoutMs);
                            while (true) {
                                const r = await reader.read().catch(() => ({ done: true, value: null }));
                                if (!r || r.done) break;
                                const value = r.value;
                                totalBytes += value.byteLength;
                                if (totalBytes > maxBytes) { try { reader.cancel(); } catch { } break; }
                                bodyText += decoder.decode(value, { stream: true });
                            }
                            bodyText += decoder.decode();
                            resolve();
                        });
                        if (timeoutId) clearTimeout(timeoutId);
                    } else {
                        bodyText = await responseClone.text();
                        totalBytes = bodyText.length;
                        if (totalBytes > maxBytes) {
                            bodyText = bodyText.slice(0, maxBytes);
                            totalBytes = maxBytes;
                        }
                    }

                    const endTs = performance.now();
                    const parsedData = parseResponseBody(response, bodyText);
                    parsedData.size = typeof totalBytes === 'number' && totalBytes > 0 ? totalBytes : parsedData.size;
                    const durationMs = Math.max(0, Math.round(endTs - startTs));
                    const warnings = await checkResponseContent(parsedData, { status: response.status, durationMs });

                    if (warnings.length > 0) {
                        const message = warnings.join('\n');
                        showAlert(message, {
                            url,
                            status: response.status,
                            size: parsedData.size,
                            method,
                            durationMs,
                            requestInfo: (() => {
                                try {
                                    const u = new URL(url);
                                    const qp = u.search ? `query=${u.search.slice(1)}` : '';
                                    let bodyInfo = '';
                                    if (options && options.body) {
                                        if (typeof options.body === 'string') {
                                            bodyInfo = ` body=${options.body}`;
                                        } else if (options.body instanceof URLSearchParams) {
                                            bodyInfo = ` form=${options.body.toString()}`;
                                        } else if (typeof FormData !== 'undefined' && options.body instanceof FormData) {
                                            const pairs = [];
                                            for (const [k, v] of options.body.entries()) { pairs.push(`${k}=${v}`); }
                                            bodyInfo = ` form=${pairs.join('&')}`;
                                        } else {
                                            try { bodyInfo = ` json=${JSON.stringify(options.body)}`; } catch { }
                                        }
                                    }
                                    return `${qp}${bodyInfo}`.trim();
                                } catch { return '' }
                            })()
                        });
                    }
                } catch (e) {
                    error('HTTP监控配置读取错误:', e);
                }
            }, 0);

            // 立即返回，避免阻塞长连接/流式请求
            return response;
        } catch (error) {
            error('HTTP监控错误:', error);
            return originalFetch.apply(this, args);
        }
    };

    // 拦截XMLHttpRequest
    XMLHttpRequest.prototype.open = function (method, url, ...args) {
        this._monitorMethod = method;
        this._monitorUrl = url;
        this._monitorStartTs = performance.now();
        this._monitorBound = false;
        this._monitorTooLarge = false;
        this._monitorCL = 0;
        return originalXHROpen.apply(this, [method, url, ...args]);
    };

    XMLHttpRequest.prototype.send = function (data) {
        const xhr = this;
        const method = xhr._monitorMethod || 'GET';
        const url = toAbsoluteUrl(xhr._monitorUrl || '');

        if (!xhr._monitorBound) {
            xhr._monitorBound = true;
            xhr.addEventListener('readystatechange', async function () {
                try {
                    // headers received: 预检查 Content-Length
                    if (xhr.readyState === 2) {
                        const cl = Number(xhr.getResponseHeader('content-length') || '0');
                        if (cl && cl > CONFIG.maxBodySize) {
                            xhr._monitorTooLarge = true;
                            xhr._monitorCL = cl;
                        }
                    }
                    if (xhr.readyState === 4) {
                        if (!shouldMonitor(url) || !CONFIG.methods.includes(method)) return;
                        const durationMs = xhr._monitorStartTs ? Math.max(0, Math.round(performance.now() - xhr._monitorStartTs)) : 0;
                        let parsedData;
                        if (xhr._monitorTooLarge) {
                            parsedData = { contentType: xhr.getResponseHeader('content-type') || '', parsedBody: null, rawBody: '', size: xhr._monitorCL || 0 };
                        } else {
                            parsedData = parseResponseBody({ headers: { get: (name) => xhr.getResponseHeader(name) } }, xhr.responseText);
                        }
                        const warnings = await checkResponseContent(parsedData, { status: xhr.status, durationMs });
                        if (warnings.length > 0) {
                            const message = warnings.join('\n');
                            showAlert(message, {
                                url,
                                status: xhr.status,
                                size: parsedData.size,
                                method,
                                durationMs,
                                requestInfo: (() => {
                                    try {
                                        const u = new URL(url);
                                        const qp = u.search ? `Query=>${u.search.slice(1)}` : '';
                                        let bodyInfo = '';
                                        const sent = data;
                                        if (typeof sent === 'string') {
                                            bodyInfo = ` Body=>${sent}`;
                                        } else if (sent instanceof URLSearchParams) {
                                            bodyInfo = ` Form=>${sent.toString()}`;
                                        } else if (typeof FormData !== 'undefined' && sent instanceof FormData) {
                                            const pairs = [];
                                            for (const [k, v] of sent.entries()) { pairs.push(`${k}=${v}`); }
                                            bodyInfo = ` Form=>${pairs.join('&')}`;
                                        } else if (sent) {
                                            try { bodyInfo = ` Json=>${JSON.stringify(sent)}`; } catch { }
                                        }
                                        return `${qp}${bodyInfo}`.trim();
                                    } catch { return '' }
                                })()
                            });
                        }
                    }
                } catch (error) {
                    error('XHR Hook Error:', error);
                }
            });
        }

        return originalXHRSend.apply(this, arguments);
    };

    // 创建配置弹窗
    function createConfigModal() {
        const modalContainer = document.createElement('div');
        modalContainer.setAttribute('http-monitor-config', 'true');
        const shadowRoot = modalContainer.attachShadow({ mode: 'open' });

        const modal = document.createElement('div');
        modal.className = 'http-monitor-config-modal';
        modal.style.setProperty('display', 'none', 'important');

        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .http-monitor-config-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000000;
            }
            .http-monitor-config-content {
                background: white;
                border-radius: 8px;
                padding: 0;
                max-width: 800px;
                max-height: 80vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                font-family: Arial, sans-serif;
            }
            .http-monitor-config-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0;
                border-bottom: 1px solid #eee;
                padding: 20px 20px 10px;
            }
            .http-monitor-config-body {
                flex: 1 1 auto;
                overflow-y: auto;
                padding: 20px;
            }
            .http-monitor-config-title {
                margin: 0;
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .http-monitor-config-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #999;
            }
            .http-monitor-config-close:hover {
                color: #333;
            }
            .http-monitor-config-group {
                margin-bottom: 15px;
            }
            .http-monitor-config-buttons {
                background: white;
                border-top: 1px solid #eee;
                display: flex;
                gap: 10px;
                padding: 10px 20px 20px;
                margin: 0;
                flex-shrink: 0;
            }
            .http-monitor-config-label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #333;
            }
            .http-monitor-config-checkbox {
                margin-right: 8px;
            }
            .http-monitor-config-input {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
                box-sizing: border-box;
            }
            .http-monitor-config-textarea {
                width: 100%;
                height: 100px;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-family: monospace;
                font-size: 12px;
                resize: vertical;
                box-sizing: border-box;
            }
            .http-monitor-config-method-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .http-monitor-config-method-item {
                display: flex;
                align-items: center;
            }

            .plugin-item {
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 10px;
                margin-bottom: 10px;
            }
            .plugin-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
                flex-wrap: wrap;
            }
            .plugin-name {
                flex: 1;
                min-width: 150px;
            }
            .plugin-toolbar {
                display: flex;
                gap: 5px;
                margin-left: auto;
            }
            .plugin-code-wrapper {
                position: relative;
                margin-top: 10px;
            }
            .plugin-code-wrapper.plugin-code-fullscreen {
                position: fixed !important;
                z-index: 1000000 !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                margin: 0 !important;
            }
            .plugin-code-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-family: monospace;
                font-size: 12px;
                background: white;
                pointer-events: none;
                overflow: auto;
                white-space: pre;
                box-sizing: border-box;
            }
            .plugin-code {
                opacity: 1;
                position: relative;
                z-index: 1;
                color: #111 !important;
                background: #fff !important;
            }
            .plugin-code-fullscreen {
                position: fixed !important;
                z-index: 1000001 !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                margin: 0 !important;
                border-radius: 0 !important;
                background: #ffffff !important;
                padding: 12px !important;
            }
            .plugin-code.plugin-code-fullscreen {
                color: #111 !important;
                background: #fff !important;
                position: fixed !important;
                z-index: 1000002 !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                margin: 0 !important;
                border-radius: 0 !important;
                padding: 12px !important;
            }
            .plugin-code-overlay.plugin-code-fullscreen {
                display: none !important;
            }
            .plugin-fullscreen-btn, .plugin-format-btn {
                background: #2196F3;
                color: white;
                border: none;
                padding: 4px 8px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 12px;
            }
            .plugin-fullscreen-btn:hover, .plugin-format-btn:hover {
                background: #1976D2;
            }
            .http-monitor-config-buttons {
                display: flex;
                gap: 10px;
                justify-content: flex-end;
                margin-top: 20px;
                border-top: 1px solid #eee;
                padding-top: 15px;
            }
            .http-monitor-config-btn-clear, .http-monitor-config-btn-reset, .http-monitor-config-btn-save, .http-monitor-config-btn-cancel {
                padding: 8px 16px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            }
            .http-monitor-config-btn-clear {
                background: #f44336;
                color: white;
            }
            .http-monitor-config-btn-clear:hover {
                background: #d32f2f;
            }
            .http-monitor-config-btn-reset {
                background: #FF9800;
                color: white;
            }
            .http-monitor-config-btn-reset:hover {
                background: #F57C00;
            }
            .http-monitor-config-btn-save {
                background: #4CAF50;
                color: white;
            }
            .http-monitor-config-btn-save:hover {
                background: #388E3C;
            }
            .http-monitor-config-btn-cancel {
                background: #9E9E9E;
                color: white;
            }
            .http-monitor-config-btn-cancel:hover {
                background: #757575;
            }
            .hl-builtin { color: #905; font-weight: bold; }
            .hl-cmt { color: #008000; font-style: italic; }
            .hl-str { color: #BA2121; }
        `;

        modal.innerHTML = `
            <div class="http-monitor-config-content">
                <div class="http-monitor-config-header">
                    <h3 class="http-monitor-config-title">HTTP监控配置</h3>
                    <button class="http-monitor-config-close" onclick="window.httpMonitorCloseConfig()">&times;</button>
                </div>

                <div class="http-monitor-config-body">
                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">
                        <input type="checkbox" class="http-monitor-config-checkbox" id="config-enabled" ${CONFIG.enabled ? 'checked' : ''}>
                        启用监控
                    </label>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">
                        <input type="checkbox" class="http-monitor-config-checkbox" id="config-verbose" ${CONFIG.verbose ? 'checked' : ''}>
                        显示详细日志
                    </label>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">
                        <input type="checkbox" class="http-monitor-config-checkbox" id="config-excludeFetch" ${CONFIG.excludeFetch ? 'checked' : ''}>
                        排除fetch请求（只监控XMLHttpRequest）
                    </label>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">fetch 读取超时 (毫秒)</label>
                    <input type="number" class="http-monitor-config-input" id="config-fetchBackgroundTimeoutMs" value="${CONFIG.fetchTimeoutMs || 2000}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">仅用于非阻塞分析，超时即停止读取</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">fetch 最大读取字节数</label>
                    <input type="number" class="http-monitor-config-input" id="config-fetchBackgroundMaxBytes" value="${CONFIG.fetchMaxBytes || 131072}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">分析最多读取的响应体大小（不超过响应体大小阈值）</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">响应体大小限制 (字节)</label>
                    <input type="number" class="http-monitor-config-input" id="config-maxBodySize" value="${CONFIG.maxBodySize}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">超过该阈值将触发默认插件"响应体过大"告警</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">请求耗时阈值 (毫秒)</label>
                    <input type="number" class="http-monitor-config-input" id="config-maxDurationMs" value="${CONFIG.maxDurationMs}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">超过该阈值将触发默认插件"请求耗时过长"告警</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">弹窗中请求信息显示阈值（字符数）</label>
                    <input type="number" class="http-monitor-config-input" id="config-alertDisplayLimit" value="${CONFIG.alertRequestInfoDisplayLimit}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">告警信息单行文本最长大小（复制不受影响）</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">监控的HTTP方法</label>
                    <div class="http-monitor-config-method-list" id="config-methods">
                        ${['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].map(method =>
            `<div class="http-monitor-config-method-item">
                                <input type="checkbox" class="http-monitor-config-checkbox" id="method-${method}"
                                       ${CONFIG.methods.includes(method) ? 'checked' : ''}>
                                <label for="method-${method}">${method}</label>
                            </div>`
        ).join('')}
                    </div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">URL匹配模式 (正则表达式)</label>
                    <div class="http-monitor-config-url-patterns" id="config-urlPatterns">
                        ${CONFIG.urlPatterns.map((pattern, index) =>
            `<div class="http-monitor-config-url-pattern">
                                <input type="text" class="http-monitor-config-input" value="${pattern.toString()}"
                                       placeholder="例如: /api/.* 或 .*">
                                <button class="remove-pattern-btn">删除</button>
                            </div>`
        ).join('')}
                    </div>
                    <button id="add-pattern-btn" style="margin-top: 12px; padding: 10px 16px; background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; box-shadow: 0 2px 6px rgba(33, 150, 243, 0.3); transition: all 0.2s ease;">添加API Path Pattern</button>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">内置插件</label>
                    <div class="http-monitor-config-url-patterns">
                        ${[{ key: 'httpCode', title: 'HTTP状态码检查' }, { key: 'sizeLimit', title: '响应体大小限制' }, { key: 'durationLimit', title: '请求耗时限制' }].map(p => `
                          <div class=\"http-monitor-config-url-pattern\">
                            <label><input type=\"checkbox\" class=\"builtin-plugin-toggle\" data-key=\"${p.key}\" ${CONFIG.builtinEnabled[p.key] !== false ? 'checked' : ''}> ${p.title}</label>
                          </div>
                        `).join('')}
                    </div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">自定义插件（统一在Worker沙箱中执行）</label>
                    <div class="http-monitor-config-url-patterns" style="margin-bottom:10px !important;">
                        <div>
                            <label>Worker超时（毫秒）</label>
                            <input type="number" class="http-monitor-config-input" id="config-pluginWorkerTimeoutMs" value="${CONFIG.pluginWorkerTimeoutMs}">
                        </div>
                    </div>
                    <div id="config-plugins" class="plugin-list">
                        ${(CONFIG.pluginsMeta || []).map((meta, index) => `
                            <div class=\"http-monitor-config-url-pattern plugin-item\" data-index=\"${index}\">\n\
                                <div class=\"plugin-header\"> \n\
                                    <input type=\"text\" class=\"http-monitor-config-input plugin-name\" value=\"${(meta.name || '').replace(/\\"/g, '&quot;')}\" placeholder=\"插件名称（唯一）\"> \n\
                                    <label><input type=\"checkbox\" class=\"plugin-enabled\" ${meta.enabled !== false ? 'checked' : ''}> 启用</label>\n\
                                    <label>\n\
                                        <label>执行模式</label>\n
                                        <select class=\"plugin-exec-mode\"> \n\
                                        <option value=\"inherit\" ${meta.executionMode === 'inherit' || !meta.executionMode ? 'selected' : ''}>继承</option>\n\
                                        <option value=\"reuse\" ${meta.executionMode === 'reuse' ? 'selected' : ''}>重用Worker</option>\n\
                                        <option value=\"spawn\" ${meta.executionMode === 'spawn' ? 'selected' : ''}>重建Worker</option>\n\
                                        </select>\n\
                                        <label>超时(ms)</label>\n\
                                        <input type=\"number\" class=\"plugin-timeout\" value=\"${typeof meta.timeoutMs === 'number' ? meta.timeoutMs : ''}\" placeholder=\"继承全局\">\n\
                                    </label>\n\
                                </div>\n
                                <div class=\"plugin-toolbar\">\n
                                    <button class=\"remove-plugin-btn\">删除</button>\n
                                    <button class=\"plugin-format-btn\">格式化</button>\n
                                    <button class=\"plugin-fullscreen-btn\">全屏/还原</button>\n
                                </div>\n
                                <div class=\"plugin-code-wrapper\"> \n
                                <pre class=\"plugin-code-overlay\"></pre>\n
                                <textarea class=\"http-monitor-config-textarea plugin-code\" placeholder=\"// 仅填写主体，无需 function/return\\n//warnings是数组，用来存放告警文本\\n// 可用: httpStatus, durationMs, sizeBytes, body, rawBody, contentType\\nif (httpStatus >= 500) {\\n  warnings.push('服务异常');\\n}\">${(CONFIG.pluginsSource && CONFIG.pluginsSource[index]) || ''}</textarea>\n<div>\n</div>\n `).join('')}
                    </div>
                    <div class="plugin-toolbar" style="margin-top:8px;">
                        <button id="add-plugin-btn" class="http-monitor-config-btn-reset">添加插件</button>
                        <button id="export-plugins-btn" class="http-monitor-config-btn-reset">导出插件JSON</button>
                        <button id="import-plugins-btn" class="http-monitor-config-btn-reset">导入插件JSON</button>
                        <input type="file" id="import-plugins-file" accept="application/json" style="display:none;" />
                    </div>
                    <div style=\"font-size:12px;color:#666;margin-top:6px;\">插件主体上下文: { httpStatus, durationMs, sizeBytes, body, rawBody, contentType }，将告警文本 push 到 warnings。</div>
                </div>
                </div>

                <div class="http-monitor-config-buttons">
                    <button class="http-monitor-config-btn-clear" id="config-clear-btn">一键清空</button>
                    <button class="http-monitor-config-btn-clear" id="config-clear-cache-btn">清空缓存</button>
                    <button class="http-monitor-config-btn-reset" id="config-reset-btn">恢复默认</button>
                    <button class="http-monitor-config-btn-save" id="config-save-btn">保存</button>
                    <button id="config-cancel-btn" class="http-monitor-config-btn-cancel" onclick="window.httpMonitorCloseConfig()">取消</button>
                </div>
            </div>
        `;

        // 将样式和模态框添加到Shadow DOM
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(modal);

        // 绑定事件监听器
        bindModalEvents(modalContainer);

        document.body.appendChild(modalContainer);
        return modalContainer;
    }

    // 添加URL模式
    function addUrlPattern(shadowRoot) {
        const container = shadowRoot.querySelector('#config-urlPatterns');
        if (!container) return;

        const newPattern = document.createElement('div');
        newPattern.className = 'http-monitor-config-url-pattern';
        newPattern.innerHTML = `
            <input type="text" class="http-monitor-config-input" value="" placeholder="例如: /api/.* 或 .*">
            <button class="remove-pattern-btn">删除</button>
        `;

        // 为新添加的删除按钮添加事件监听器
        const removeBtn = newPattern.querySelector('.remove-pattern-btn');
        removeBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

        container.appendChild(newPattern);
    }

    // 从弹窗保存配置
    function saveConfigFromModal(shadowRoot) {
        try {
            // 更新配置
            const enabledCheckbox = shadowRoot.querySelector('#config-enabled');
            const verboseCheckbox = shadowRoot.querySelector('#config-verbose');
            const excludeFetchCheckbox = shadowRoot.querySelector('#config-excludeFetch');
            const maxBodySizeInput = shadowRoot.querySelector('#config-maxBodySize');
            const maxDurationInput = shadowRoot.querySelector('#config-maxDurationMs');
            const alertDisplayLimitInput = shadowRoot.querySelector('#config-alertDisplayLimit');
            const pluginWorkerTimeoutInput = shadowRoot.querySelector('#config-pluginWorkerTimeoutMs');
            const fetchBgTimeoutInput = shadowRoot.querySelector('#config-fetchBackgroundTimeoutMs');
            const fetchBgMaxBytesInput = shadowRoot.querySelector('#config-fetchBackgroundMaxBytes');

            CONFIG.enabled = enabledCheckbox ? enabledCheckbox.checked : CONFIG.enabled;
            CONFIG.verbose = verboseCheckbox ? verboseCheckbox.checked : CONFIG.verbose;
            CONFIG.excludeFetch = excludeFetchCheckbox ? excludeFetchCheckbox.checked : CONFIG.excludeFetch;
            CONFIG.maxBodySize = maxBodySizeInput ? parseInt(maxBodySizeInput.value) || 1024 * 1024 : CONFIG.maxBodySize;
            CONFIG.maxDurationMs = maxDurationInput ? parseInt(maxDurationInput.value) || 1000 : CONFIG.maxDurationMs;
            CONFIG.alertRequestInfoDisplayLimit = alertDisplayLimitInput ? Math.max(50, parseInt(alertDisplayLimitInput.value) || 300) : CONFIG.alertRequestInfoDisplayLimit;
            // 强制开启 Worker 模式
            CONFIG.pluginWorkerEnabled = true;
            CONFIG.pluginWorkerTimeoutMs = pluginWorkerTimeoutInput ? Math.max(1000, parseInt(pluginWorkerTimeoutInput.value) || 60000) : CONFIG.pluginWorkerTimeoutMs;
            CONFIG.fetchTimeoutMs = fetchBgTimeoutInput ? Math.max(500, parseInt(fetchBgTimeoutInput.value) || 2000) : CONFIG.fetchTimeoutMs;
            CONFIG.fetchMaxBytes = fetchBgMaxBytesInput ? Math.max(4096, parseInt(fetchBgMaxBytesInput.value) || 131072) : CONFIG.fetchMaxBytes;

            // 更新HTTP方法
            CONFIG.methods = [];
            ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].forEach(method => {
                const checkbox = shadowRoot.querySelector(`#method-${method}`);
                if (checkbox && checkbox.checked) {
                    CONFIG.methods.push(method);
                }
            });

            // 更新URL模式（支持 /body/flags 形式）
            CONFIG.urlPatterns = [];
            const patternInputs = shadowRoot.querySelectorAll('#config-urlPatterns input[type="text"]');
            patternInputs.forEach(input => {
                const value = (input.value || '').trim();
                if (!value) return;
                // 优先按 /.../flags 解析
                const revived = revivePattern(value);
                if (revived instanceof RegExp) {
                    CONFIG.urlPatterns.push(revived);
                    return;
                }
                // 其次尝试直接作为正则主体
                try {
                    CONFIG.urlPatterns.push(new RegExp(value));
                } catch (e) {
                    warn('无效的正则表达式，按纯文本匹配处理:', value);
                    CONFIG.urlPatterns.push(new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
                }
            });
            // 确保为 RegExp 数组
            ensureUrlPatterns();

            // 名称冲突可视标记
            const hasConflict = validatePluginNames(shadowRoot);
            if (hasConflict) {
                alert('存在重复的插件名称，请修正红框标记项');
                throw new Error('插件名称重复');
            }

            // 更新自定义插件列表（名称唯一、启用、源码）
            CONFIG.pluginsSource = [];
            CONFIG.plugins = [];
            CONFIG.pluginsMeta = [];
            const pluginNodes = shadowRoot.querySelectorAll('#config-plugins .plugin-item');
            const usedNames = new Set();
            for (const node of pluginNodes) {
                const nameInput = node.querySelector('.plugin-name');
                const enableInput = node.querySelector('.plugin-enabled');
                const codeArea = node.querySelector('.plugin-code');
                const execModeSel = node.querySelector('.plugin-exec-mode');
                const timeoutInput = node.querySelector('.plugin-timeout');
                const name = (nameInput && nameInput.value.trim()) || '';
                if (!name) { alert('插件名称不能为空'); throw new Error('插件名称不能为空'); }
                if (usedNames.has(name)) { alert('插件名称重复: ' + name); throw new Error('插件名称重复'); }
                usedNames.add(name);
                const src = (codeArea && codeArea.value.trim()) || '';
                CONFIG.pluginsSource.push(src);
                const executionMode = execModeSel ? (execModeSel.value || 'inherit') : 'inherit';
                const timeoutMs = timeoutInput && timeoutInput.value ? Math.max(1000, parseInt(timeoutInput.value)) : undefined;
                const metaObj = { name, enabled: enableInput ? enableInput.checked : true, executionMode };
                if (typeof timeoutMs === 'number' && !Number.isNaN(timeoutMs)) metaObj.timeoutMs = timeoutMs;
                CONFIG.pluginsMeta.push(metaObj);
                const fn = compilePluginFromSource(src);
                if (typeof fn === 'function') {
                    CONFIG.plugins.push(fn);
                } else {
                    warn('插件不是函数/编译失败，已忽略');
                }
            }

            // 确保至少有一个URL模式
            if (CONFIG.urlPatterns.length === 0) {
                CONFIG.urlPatterns.push(/.*/);
            }

            // 保存内置插件开关
            shadowRoot.querySelectorAll('.builtin-plugin-toggle').forEach(chk => {
                const key = chk.getAttribute('data-key');
                if (key) {
                    CONFIG.builtinEnabled[key] = chk.checked;
                }
            });

            // 保存到localStorage
            saveConfig();
            // 再次标准化 urlPatterns
            ensureUrlPatterns();

            // 关闭弹窗
            window.httpMonitorCloseConfig();

            // 显示成功消息（绿色 Toast，避免被 .http-monitor-alert 的红色样式覆盖）
            const okDiv = document.createElement('div');
            okDiv.className = 'http-monitor-toast';
            okDiv.textContent = '配置已保存';
            // 强制样式，避免被全局告警样式覆盖
            okDiv.style.setProperty('position', 'fixed', 'important');
            okDiv.style.setProperty('top', '20px', 'important');
            okDiv.style.setProperty('right', '20px', 'important');
            okDiv.style.setProperty('z-index', '1000002', 'important');
            okDiv.style.setProperty('background', '#2e7d32', 'important');
            okDiv.style.setProperty('color', '#fff', 'important');
            okDiv.style.setProperty('padding', '8px 12px', 'important');
            okDiv.style.setProperty('border-radius', '4px', 'important');
            okDiv.style.setProperty('border-left', '4px solid #1b5e20', 'important');
            okDiv.style.setProperty('box-shadow', '0 4px 20px rgba(0,0,0,0.3)', 'important');
            okDiv.style.setProperty('font-family', 'Arial, sans-serif', 'important');
            okDiv.style.setProperty('font-size', '14px', 'important');
            okDiv.style.setProperty('white-space', 'nowrap', 'important');
            okDiv.style.setProperty('max-width', 'unset', 'important');
            document.body.appendChild(okDiv);
            setTimeout(() => { try { okDiv.remove(); } catch { } }, 2000);

            log('配置已更新:', CONFIG);
        } catch (error) {
            error('保存配置失败:', error);
            showAlert('保存配置失败: ' + error.message, null);
        }
    }

    // 显示配置弹窗
    function showConfigModal() {
        // 首先检查是否已经存在modal容器
        let modalContainer = document.querySelector('div[http-monitor-config]');



        if (!modalContainer) {
            modalContainer = createConfigModal();
        } else {
            // 模态框已存在，无需重新绑定事件监听器
            // 因为createConfigModal()中已经绑定了事件
        }

        // 确保modal显示
        modalContainer.style.setProperty('display', 'flex', 'important');
        // 确保shadowRoot内部的modal也显示
        const shadowRoot = modalContainer.shadowRoot;
        if (shadowRoot) {
            const modal = shadowRoot.querySelector('.http-monitor-config-modal');
            if (modal) {
                modal.style.setProperty('display', 'flex', 'important');
            }
        }
    }

    // 绑定模态框事件
    function bindModalEvents(modalContainer) {
        // 获取shadow root
        const shadowRoot = modalContainer.shadowRoot;
        if (!shadowRoot) {
            error('Shadow root not found');
            return;
        }

        const saveBtn = shadowRoot.querySelector('#config-save-btn');
        const clearBtn = shadowRoot.querySelector('#config-clear-btn');
        const clearCacheBtn = shadowRoot.querySelector('#config-clear-cache-btn');
        const resetBtn = shadowRoot.querySelector('#config-reset-btn');
        const cancelBtn = shadowRoot.querySelector('#config-cancel-btn');
        const closeBtn = shadowRoot.querySelector('.http-monitor-config-close');
        const addPatternBtn = shadowRoot.querySelector('#add-pattern-btn');
        const addPluginBtn = shadowRoot.querySelector('#add-plugin-btn');

        // 保存按钮事件
        if (saveBtn) {
            // 移除旧的事件监听器
            saveBtn.replaceWith(saveBtn.cloneNode(true));
            const newSaveBtn = shadowRoot.querySelector('#config-save-btn');
            newSaveBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                saveConfigFromModal(shadowRoot);
            });
        }

        // 取消按钮事件
        if (cancelBtn) {
            // 移除旧的事件监听器
            cancelBtn.replaceWith(cancelBtn.cloneNode(true));
            const newCancelBtn = shadowRoot.querySelector('#config-cancel-btn');
            newCancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.httpMonitorCloseConfig();
            });
        }

        // 关闭按钮事件（右上角X按钮）
        if (closeBtn) {
            // 移除旧的事件监听器
            closeBtn.replaceWith(closeBtn.cloneNode(true));
            const newCloseBtn = shadowRoot.querySelector('.http-monitor-config-close');
            newCloseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.httpMonitorCloseConfig();
            });
        }

        // 一键清空
        if (clearBtn) {
            // 移除旧的事件监听器
            clearBtn.replaceWith(clearBtn.cloneNode(true));
            const newClearBtn = shadowRoot.querySelector('#config-clear-btn');
            newClearBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                if (!confirm('确认清空所有监控配置（URL模式、自定义插件等）？')) return;
                // 清空主要配置项
                CONFIG.urlPatterns = [/^.*$/];
                CONFIG.pluginsSource = [];
                CONFIG.pluginsMeta = [];
                CONFIG.plugins = [];
                // 可保留基础开关与阈值，如需重置可在此补充
                saveConfig();
                // 刷新UI
                // URL 列表
                const urlBox = shadowRoot.querySelector('#config-urlPatterns');
                if (urlBox) {
                    urlBox.innerHTML = `
                        <div class="http-monitor-config-url-pattern">
                            <input type="text" class="http-monitor-config-input" value="/.*/" placeholder="例如: /api/.* 或 .*">
                            <button class="remove-pattern-btn">删除</button>
                        </div>`;
                    // 重新绑定删除
                    urlBox.querySelectorAll('.remove-pattern-btn').forEach(btn => {
                        btn.addEventListener('click', (ev) => {
                            ev.preventDefault(); ev.stopPropagation();
                            ev.target.parentElement.remove();
                        });
                    });
                }
                // 插件列表
                rebuildPluginsUI(shadowRoot);
                validatePluginNames(shadowRoot);
                alert('已清空配置');
            });
        }

        // 清空缓存（localStorage 键）
        if (clearCacheBtn) {
            clearCacheBtn.replaceWith(clearCacheBtn.cloneNode(true));
            const newClearCacheBtn = shadowRoot.querySelector('#config-clear-cache-btn');
            newClearCacheBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                if (!confirm('确认清空缓存（配置与按钮位置等本地存储）？')) return;
                try {
                    localStorage.removeItem('httpMonitorConfig');
                    localStorage.removeItem('httpMonitorButtonPosition');
                } catch { }
                alert('缓存已清空');
            });
        }

        // 添加URL模式按钮事件
        if (addPatternBtn) {
            addPatternBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                addUrlPattern(shadowRoot);
            });
        }

        // 恢复默认
        if (resetBtn) {
            // 移除旧的事件监听器
            resetBtn.replaceWith(resetBtn.cloneNode(true));
            const newResetBtn = shadowRoot.querySelector('#config-reset-btn');
            newResetBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                if (!confirm('确认将监控配置恢复为默认值？')) return;
                // 默认值
                CONFIG.enabled = true;
                CONFIG.verbose = false;
                CONFIG.excludeFetch = false;
                CONFIG.maxBodySize = 1024 * 1024;
                CONFIG.maxDurationMs = 2000;
                CONFIG.fetchTimeoutMs = 2000;
                CONFIG.fetchMaxBytes = 131072;
                CONFIG.methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];
                CONFIG.urlPatterns = [/[a-zA-z]+:\/\/[^\s]*/];
                CONFIG.builtinEnabled = { httpCode: true, sizeLimit: true, durationLimit: true };
                CONFIG.pluginsSource = [];
                CONFIG.pluginsMeta = [];
                CONFIG.plugins = [];
                saveConfig();

                // 同步表单控件
                const enabledCheckbox = shadowRoot.querySelector('#config-enabled'); if (enabledCheckbox) enabledCheckbox.checked = CONFIG.enabled;
                const verboseCheckbox = shadowRoot.querySelector('#config-verbose'); if (verboseCheckbox) verboseCheckbox.checked = CONFIG.verbose;
                const excludeFetchCheckbox = shadowRoot.querySelector('#config-excludeFetch'); if (excludeFetchCheckbox) excludeFetchCheckbox.checked = CONFIG.excludeFetch;
                const maxBodySizeInput = shadowRoot.querySelector('#config-maxBodySize'); if (maxBodySizeInput) maxBodySizeInput.value = String(CONFIG.maxBodySize);
                const maxDurationInput = shadowRoot.querySelector('#config-maxDurationMs'); if (maxDurationInput) maxDurationInput.value = String(CONFIG.maxDurationMs);
                const fetchBgTimeoutInput = shadowRoot.querySelector('#config-fetchBackgroundTimeoutMs'); if (fetchBgTimeoutInput) fetchBgTimeoutInput.value = String(CONFIG.fetchTimeoutMs);
                const fetchBgMaxBytesInput = shadowRoot.querySelector('#config-fetchBackgroundMaxBytes'); if (fetchBgMaxBytesInput) fetchBgMaxBytesInput.value = String(CONFIG.fetchMaxBytes);
                ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].forEach(m => {
                    const cb = shadowRoot.querySelector(`#method-${m}`);
                    if (cb) cb.checked = CONFIG.methods.includes(m);
                });
                // URL 列表
                const urlBox2 = shadowRoot.querySelector('#config-urlPatterns');
                if (urlBox2) {
                    urlBox2.innerHTML = CONFIG.urlPatterns.map(p => `
                        <div class=\"http-monitor-config-url-pattern\">
                            <input type=\"text\" class=\"http-monitor-config-input\" value=\"${p.toString()}\" placeholder=\"例如: /api/.* 或 .*\">
                            <button class=\"remove-pattern-btn\">删除</button>
                        </div>
                    `).join('');
                    urlBox2.querySelectorAll('.remove-pattern-btn').forEach(btn => {
                        btn.addEventListener('click', (ev) => {
                            ev.preventDefault(); ev.stopPropagation();
                            ev.target.parentElement.remove();
                        });
                    });
                }
                // 内置插件开关
                shadowRoot.querySelectorAll('.builtin-plugin-toggle').forEach(chk => {
                    const key = chk.getAttribute('data-key');
                    if (key && key in CONFIG.builtinEnabled) {
                        chk.checked = CONFIG.builtinEnabled[key] !== false;
                    }
                });
                // 插件列表
                rebuildPluginsUI(shadowRoot);
                validatePluginNames(shadowRoot);
                alert('已恢复默认配置');
            });
        }

        if (addPluginBtn) {
            addPluginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const container = shadowRoot.querySelector('#config-plugins');
                if (!container) return;
                const wrapper = document.createElement('div');
                wrapper.className = 'http-monitor-config-url-pattern plugin-item';
                // 新插件
                wrapper.innerHTML = `
                    <div class="plugin-header">
                        <input type="text" class="http-monitor-config-input plugin-name" value="" placeholder="插件名称（唯一）">
                        <label><input type="checkbox" class="plugin-enabled" checked> 启用</label>
                    </div>
                    <div class="plugin-header">
                        <label style="width:100%; height:100%;">
                            <label>执行模式</label>
                            <select class="plugin-exec-mode">
                            <option value="inherit" selected>继承</option>
                            <option value="reuse">重用Worker</option>
                            <option value="spawn">重建Worker</option>
                            </select>
                            <label>超时(ms)</label>
                            <input type="number" class="plugin-timeout" placeholder="默认继承全局">
                        </label>
                    </div>
                    <div class="plugin-toolbar">
                        <button class="remove-plugin-btn">删除</button>
                        <button class="plugin-format-btn">格式化</button>
                        <button class="plugin-fullscreen-btn">全屏/还原</button>
                    </div>
                    <div class="plugin-code-wrapper">
                        <pre class="plugin-code-overlay"></pre>
                        <textarea class="http-monitor-config-textarea plugin-code" placeholder="// 仅填写主体，无需 function/return\n//warnings是数组，用来存放告警文本\n// 可用: httpStatus, durationMs, sizeBytes, body, rawBody, contentType\nif (httpStatus >= 500) {\n  warnings.push('服务异常');\n}"></textarea>
                    </div>
                `;
                const removeBtn = wrapper.querySelector('.remove-plugin-btn');
                removeBtn.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    wrapper.remove();
                    validatePluginNames(shadowRoot);
                });
                container.appendChild(wrapper);
                attachPluginEditorBehavior(shadowRoot, wrapper);
                validatePluginNames(shadowRoot);
            });
        }

        // 为现有的删除按钮添加事件监听器（URL模式）
        shadowRoot.querySelectorAll('.remove-pattern-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.target.parentElement.remove();
            });
        });

        // 现有插件项绑定行为
        shadowRoot.querySelectorAll('#config-plugins .plugin-item').forEach(item => {
            const removeBtn = item.querySelector('.remove-plugin-btn');
            if (removeBtn) {
                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    item.remove();
                    validatePluginNames(shadowRoot);
                });
            }
            attachPluginEditorBehavior(shadowRoot, item);
        });

        // 导出/导入插件配置
        const exportBtn = shadowRoot.querySelector('#export-plugins-btn');
        const importBtn = shadowRoot.querySelector('#import-plugins-btn');
        const importFile = shadowRoot.querySelector('#import-plugins-file');
        if (exportBtn) {
            exportBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                const data = {
                    pluginsMeta: CONFIG.pluginsMeta || [],
                    pluginsSource: CONFIG.pluginsSource || []
                };
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = 'http-monitor-plugins.json';
                document.body.appendChild(a); a.click(); a.remove();
                URL.revokeObjectURL(url);
            });
        }
        if (importBtn && importFile) {
            importBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                importFile.value = '';
                importFile.click();
            });
            importFile.addEventListener('change', async () => {
                const file = importFile.files && importFile.files[0];
                if (!file) return;
                try {
                    const text = await file.text();
                    const json = JSON.parse(text);
                    const sources = Array.isArray(json.pluginsSource) ? json.pluginsSource : [];
                    let meta = Array.isArray(json.pluginsMeta) ? json.pluginsMeta : [];
                    // 兜底元信息
                    if (meta.length !== sources.length) {
                        meta = sources.map((_, i) => ({ name: `plugin_${i + 1}`, enabled: true }));
                    }
                    CONFIG.pluginsSource = sources;
                    CONFIG.pluginsMeta = meta;
                    // 重新编译
                    CONFIG.plugins = [];
                    sources.forEach(src => {
                        const fn = compilePluginFromSource(src);
                        if (typeof fn === 'function') CONFIG.plugins.push(fn);
                    });
                    saveConfig();
                    rebuildPluginsUI(shadowRoot);
                    validatePluginNames(shadowRoot);
                    alert('插件配置已导入');
                } catch (err) {
                    alert('导入失败：' + err.message);
                }
            });
        }
    }

    // 创建配置按钮
    function createConfigButton() {
        const button = document.createElement('button');
        button.className = 'http-monitor-config-btn';
        button.innerHTML = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6366" width="48" height="48" fill="none"><path d="M486.4 25.6A383.1296 383.1296 0 0 0 102.4 409.6c0 212.736 171.264 384 384 384 212.736 0 384-171.264 384-384C870.4 196.864 699.136 25.6 486.4 25.6z m0 674.6112c-119.3472 0-217.9584-98.6112-217.9584-217.9584 0-119.3472 98.6112-217.9584 217.9584-217.9584 119.3472 0 217.9584 98.6112 217.9584 217.9584 0 119.3472-98.6112 217.9584-217.9584 217.9584z m0-332.1344c-67.4816 0-119.3472 51.9168-119.3472 119.3472 0 67.4816 51.8656 119.3472 119.3472 119.3472s119.3472-51.8656 119.3472-119.296c0-67.4816-51.8656-119.3984-119.3472-119.3984z" fill="#28BC85" p-id="6367"></path><path d="M795.9552 742.4c-73.9328 68.2496-174.336 113.7664-285.2352 113.7664-110.9504 0-211.3536-45.5168-285.2864-113.7664l-68.6592 159.2832c-5.2736 17.0496-5.2736 34.1504 10.5472 51.2 21.1456 28.4672 58.112 45.5168 105.6768 45.5168h480.7168c36.9664 0 84.48-11.3664 105.6256-45.5168 10.5984-17.0496 15.872-34.1504 5.3248-51.2L795.9552 742.4z" fill="#28BC85" p-id="6368"></path></svg>';

        // 拖动功能
        let isDragging = false;
        let hasMoved = false;
        let startX = 0;
        let startY = 0;
        let initialX = 0;
        let initialY = 0;

        // 鼠标按下事件
        button.addEventListener('mousedown', (e) => {
            // 只有左键按下才启动拖动
            if (e.button === 0) {
                log('开始拖动');
                isDragging = true;
                hasMoved = false;
                button.classList.add('dragging');

                startX = e.clientX;
                startY = e.clientY;

                // 获取当前按钮位置
                const rect = button.getBoundingClientRect();
                initialX = rect.left;
                initialY = rect.top;

                e.preventDefault();
                e.stopPropagation();
            }
        });

        // 鼠标移动事件
        let animationFrameId = null;
        let lastX = 0;
        let lastY = 0;

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;

                // 检查是否移动了足够的距离（增加阈值减少误判）
                if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
                    hasMoved = true;
                }

                const newX = initialX + deltaX;
                const newY = initialY + deltaY;

                // 限制在视窗范围内
                const maxX = window.innerWidth - button.offsetWidth;
                const maxY = window.innerHeight - button.offsetHeight;

                const constrainedX = Math.max(0, Math.min(newX, maxX));
                const constrainedY = Math.max(0, Math.min(newY, maxY));

                // 只有当位置确实发生变化时才更新，减少不必要的重绘
                if (Math.abs(constrainedX - lastX) > 1 || Math.abs(constrainedY - lastY) > 1) {
                    lastX = constrainedX;
                    lastY = constrainedY;

                    // 使用requestAnimationFrame减少闪烁，但只保留一个动画帧
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                    }

                    animationFrameId = requestAnimationFrame(() => {
                        button.style.setProperty('left', constrainedX + 'px', 'important');
                        button.style.setProperty('top', constrainedY + 'px', 'important');
                        animationFrameId = null;
                    });
                }

                e.preventDefault();
            }
        });

        // 鼠标释放事件
        document.addEventListener('mouseup', (e) => {
            if (isDragging) {
                log('结束拖动, 是否移动:', hasMoved);
                isDragging = false;
                button.classList.remove('dragging');

                // 保存位置到localStorage
                const rect = button.getBoundingClientRect();
                const position = {
                    x: rect.left,
                    y: rect.top
                };
                localStorage.setItem('httpMonitorButtonPosition', JSON.stringify(position));
                log('位置已保存:', position);

                // 如果移动了，阻止点击事件
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });

        // 添加点击事件（打开配置窗口）
        button.addEventListener('click', (e) => {
            // 只有在没有拖动的情况下才打开配置窗口
            if (!hasMoved) {
                showConfigModal();
            }
        });

        // 触摸事件支持（移动端）
        button.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                hasMoved = false;
                button.classList.add('dragging');

                const touch = e.touches[0];
                startX = touch.clientX;
                startY = touch.clientY;

                const rect = button.getBoundingClientRect();
                initialX = rect.left;
                initialY = rect.top;

                e.preventDefault();
                e.stopPropagation();
            }
        });

        let touchAnimationFrameId = null;
        let touchLastX = 0;
        let touchLastY = 0;

        document.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                const touch = e.touches[0];
                const deltaX = touch.clientX - startX;
                const deltaY = touch.clientY - startY;

                // 检查是否移动了足够的距离（增加阈值减少误判）
                if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
                    hasMoved = true;
                }

                const newX = initialX + deltaX;
                const newY = initialY + deltaY;

                const maxX = window.innerWidth - button.offsetWidth;
                const maxY = window.innerHeight - button.offsetHeight;

                const constrainedX = Math.max(0, Math.min(newX, maxX));
                const constrainedY = Math.max(0, Math.min(newY, maxY));

                // 只有当位置确实发生变化时才更新，减少不必要的重绘
                if (Math.abs(constrainedX - touchLastX) > 1 || Math.abs(constrainedY - touchLastY) > 1) {
                    touchLastX = constrainedX;
                    touchLastY = constrainedY;

                    // 使用requestAnimationFrame减少闪烁，但只保留一个动画帧
                    if (touchAnimationFrameId) {
                        cancelAnimationFrame(touchAnimationFrameId);
                    }

                    touchAnimationFrameId = requestAnimationFrame(() => {
                        button.style.setProperty('left', constrainedX + 'px', 'important');
                        button.style.setProperty('top', constrainedY + 'px', 'important');
                        touchAnimationFrameId = null;
                    });
                }

                e.preventDefault();
            }
        });

        document.addEventListener('touchend', (e) => {
            if (isDragging) {
                isDragging = false;
                button.classList.remove('dragging');

                const rect = button.getBoundingClientRect();
                const position = {
                    x: rect.left,
                    y: rect.top
                };
                localStorage.setItem('httpMonitorButtonPosition', JSON.stringify(position));

                // 如果移动了，阻止点击事件
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });

        // 加载保存的位置
        const savedPosition = localStorage.getItem('httpMonitorButtonPosition');
        if (savedPosition) {
            try {
                const position = JSON.parse(savedPosition);
                button.style.setProperty('left', position.x + 'px', 'important');
                button.style.setProperty('top', position.y + 'px', 'important');
            } catch (e) {
                warn('无法加载按钮位置:', e);
            }
        }

        document.body.appendChild(button);
    }

    // 初始化
    function init() {
        // 加载配置
        loadConfig();
        createStyles();
        createConfigButton();

        log('HTTP响应监控器已启动');
        log('配置:', CONFIG);

        // 添加全局复制函数（用于控制台命令）
        window.httpMonitorCopy = copyToClipboard;

        // 添加全局关闭函数
        window.httpMonitorCloseConfig = () => {
            // 查找modal容器并获取shadowRoot中的modal
            const modalContainer = document.querySelector('div[http-monitor-config]');
            if (modalContainer) {
                // 隐藏外部的modalContainer
                modalContainer.style.setProperty('display', 'none', 'important');
                // 隐藏内部的modal元素
                const shadowRoot = modalContainer.shadowRoot;
                const modal = shadowRoot.querySelector('.http-monitor-config-modal');
                if (modal) {
                    modal.style.setProperty('display', 'none', 'important');
                }
            }
        };

        // 添加控制台命令
        window.httpMonitor = {
            config: CONFIG,
            // 注册一个插件：function ({url, method, status, parsedData, location}) => string[]
            registerPlugin: (plugin) => {
                if (typeof plugin === 'function') {
                    CONFIG.plugins.push(plugin);
                    log('已注册插件');
                } else {
                    warn('插件必须是函数');
                }
            },
            // 清空自定义插件
            clearPlugins: () => { CONFIG.plugins = []; log('自定义插件已清空'); },
            enable: () => { CONFIG.enabled = true; saveConfig(); log('HTTP监控已启用'); },
            disable: () => { CONFIG.enabled = false; saveConfig(); log('HTTP监控已禁用'); },
            addUrlPattern: (pattern) => {
                const regex = new RegExp(pattern);
                CONFIG.urlPatterns.push(regex);
                saveConfig();
                log('已添加URL模式:', pattern);
            },
            removeUrlPattern: (pattern) => {
                const index = CONFIG.urlPatterns.findIndex(p => p.toString() === pattern);
                if (index > -1) {
                    CONFIG.urlPatterns.splice(index, 1);
                    saveConfig();
                    log('已移除URL模式:', pattern);
                }
            },
            showConfig: showConfigModal,
            closeConfig: () => {
                // 查找modal容器并获取shadowRoot中的modal
                const modalContainer = document.querySelector('div[http-monitor-config]');
                if (modalContainer) {
                    // 隐藏外部的modalContainer
                    modalContainer.style.setProperty('display', 'none', 'important');
                    // 隐藏内部的modal元素
                    const shadowRoot = modalContainer.shadowRoot;
                    const modal = shadowRoot.querySelector('.http-monitor-config-modal');
                    if (modal) {
                        modal.style.setProperty('display', 'none', 'important');
                    }
                    log('配置窗口已关闭');
                    return;
                }
                log('配置窗口未找到');
            },
            reloadConfig: () => { loadConfig(); log('配置已重新加载'); },
            clearConfig: () => {
                localStorage.removeItem('httpMonitorConfig');
                log('配置已清除，将使用默认配置');
                loadConfig();
            },
            resetConfig: () => {
                CONFIG.urlPatterns = [/^.*$/];
                CONFIG.enabled = true;
                CONFIG.verbose = false;
                CONFIG.excludeFetch = false;
                CONFIG.methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
                CONFIG.maxBodySize = 1024 * 1024;
                saveConfig();
                log('配置已重置为默认值');
            },
            resetButtonPosition: () => {
                localStorage.removeItem('httpMonitorButtonPosition');
                const button = document.querySelector('.http-monitor-config-btn');
                if (button) {
                    button.style.setProperty('left', '20px', 'important');
                    button.style.setProperty('top', '20px', 'important');
                    log('按钮位置已重置为默认位置');
                }
            },
            setButtonPosition: (x, y) => {
                const button = document.querySelector('.http-monitor-config-btn');
                if (button) {
                    button.style.setProperty('left', x + 'px', 'important');
                    button.style.setProperty('top', y + 'px', 'important');
                    const position = { x, y };
                    localStorage.setItem('httpMonitorButtonPosition', JSON.stringify(position));
                    log(`按钮位置已设置为: (${x}, ${y})`);
                }
            }
        };
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
