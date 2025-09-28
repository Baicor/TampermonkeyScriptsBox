// ==UserScript==
// @name         HTTP监控器
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  监控HTTP请求并弹窗警告
// @author       Galio
// @match        *://*/*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzU4Mzg3NzA2NzI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU3NjkiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00ODYuNCAyNS42QTM4My4xMjk2IDM4My4xMjk2IDAgMCAwIDEwMi40IDQwOS42YzAgMjEyLjczNiAxNzEuMjY0IDM4NCAzODQgMzg0IDIxMi43MzYgMCAzODQtMTcxLjI2NCAzODQtMzg0Qzg3MC40IDE5Ni44NjQgNjk5LjEzNiAyNS42IDQ4Ni40IDI1LjZ6IG0wIDY3NC42MTEyYy0xMTkuMzQ3MiAwLTIxNy45NTg0LTk4LjYxMTItMjE3Ljk1ODQtMjE3Ljk1ODQgMC0xMTkuMzQ3MiA5OC42MTEyLTIxNy45NTg0IDIxNy45NTg0LTIxNy45NTg0IDExOS4zNDcyIDAgMjE3Ljk1ODQgOTguNjExMiAyMTcuOTU4NCAyMTcuOTU4NCAwIDExOS4zNDcyLTk4LjYxMTIgMjE3Ljk1ODQtMjE3Ljk1ODQgMjE3Ljk1ODR6IG0wLTMzMi4xMzQ0Yy02Ny40ODE2IDAtMTE5LjM0NzIgNTEuOTE2OC0xMTkuMzQ3MiAxMTkuMzQ3MiAwIDY3LjQ4MTYgNTEuODY1NiAxMTkuMzQ3MiAxMTkuMzQ3MiAxMTkuMzQ3MnMxMTkuMzQ3Mi01MS44NjU2IDExOS4zNDcyLTExOS4yOTZjMC02Ny40ODE2LTUxLjg2NTYtMTE5LjM5ODQtMTE5LjM0NzItMTE5LjM5ODR6IiBmaWxsPSIjMjhCQzg1IiBwLWlkPSI1NzcwIj48L3BhdGg+PHBhdGggZD0iTTc5NS45NTUyIDc0Mi40Yy03My45MzI4IDY4LjI0OTYtMTc0LjMzNiAxMTMuNzY2NC0yODUuMjM1MiAxMTMuNzY2NC0xMTAuOTUwNCAwLTIxMS4zNTM2LTQ1LjUxNjgtMjg1LjI4NjQtMTEzLjc2NjRsLTY4LjY1OTIgMTU5LjI4MzJjLTUuMjczNiAxNy4wNDk2LTUuMjczNiAzNC4xNTA0IDEwLjU0NzIgNTEuMiAyMS4xNDU2IDI4LjQ2NzIgNTguMTEyIDQ1LjUxNjggMTA1LjY3NjggNDUuNTE2OGg0ODAuNzE2OGMzNi45NjY0IDAgODQuNDgtMTEuMzY2NCAxMDUuNjI1Ni00NS41MTY4IDEwLjU5ODQtMTcuMDQ5NiAxNS44NzItMzQuMTUwNCA1LjMyNDgtNTEuMkw3OTUuOTU1MiA3NDIuNHoiIGZpbGw9IiMyOEJDODUiIHAtaWQ9IjU3NzEiPjwvcGF0aD48L3N2Zz4=
// @grant        GM_registerMenuCommand
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Baicor/TampermonkeyScriptsBox/refs/heads/master/HttpMonitor.js    
// ==/UserScript==

// 创建样式
function createEnterButtonStyle() {
    const textContent = `
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
        `;
    injectStyles(null, textContent)

}

// 统一样式注入方法：可注入到 document 或任意 ShadowRoot
function injectStyles(targetRoot, cssText) {
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    if (targetRoot && typeof targetRoot.appendChild === 'function') {
        targetRoot.appendChild(styleEl);
    } else {
        document.head.appendChild(styleEl);
    }
    return styleEl;
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

function initMenu(){

    const registerMenu = function(name, value, key){
        GM_registerMenuCommand(name, function(){
        localStorage.setItem("httpMonitorHide", value);
        location.reload();
    }, key);
    };

    registerMenu("在本站关闭HttpMointor", 0, "G")
    registerMenu("在本站开启HttpMointor", 1, "K")
}


function needHide(){
    return localStorage.getItem("httpMonitorHide") !== "1";
}


// 配置选项
let CONFIG = {
    // 是否启用监控
    enabled: true,
    // 要监控的URL模式（支持正则表达式）
    urlPatterns: [
        /[a-zA-z]+:\/\/[^\s]*/
    ],
    // 展示与编辑使用的原始字面值（字符串数组），保存为 RegExp 存入 urlPatterns
    urlPatternsRaw: [
        '/[a-zA-z]+:\\/\\/[^\\s]*/'
    ],
    // 要监控的HTTP方法
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'],
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
    // 【前置】插件
    prePluginsSource: [],
    prePlugins: [],
    prePluginsMeta: [],
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
    fetchMaxBytes: 65536,
    // 仅用元信息进行检查，跳过 body 深度分析
    metaOnly: false,
    // 复用 Worker 空闲自动回收秒数
    workerIdleSeconds: 15,
    // 复用 Worker 最大并发（串行=1）
    workerMaxConcurrency: 1,
    // Worker 返回的最大告警条数
    maxWarningsPerRun: 50,
    // 指标日志
    metrics: false
};

function __log(handler, ...data){
    if (CONFIG.verbose) handler("[http-monitor]", ...data)
}

function info(...data) {
    __log(console.log, ...data)
}

function warn(...data) {
    __log(console.warn, ...data)
}

function error(...data){
    __log(console.error, ...data)
}

// 从localStorage加载配置
function loadConfig() {
    info('开始加载配置...');

    const saved = localStorage.getItem('httpMonitorConfig');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            info('从localStorage加载的配置:', parsed);

            // 保持 CONFIG 引用不变，避免外部引用失效
            Object.assign(CONFIG, parsed);
            info('合并后的配置:', CONFIG);
            // 运行时函数数组不从存储中恢复，统一重建，避免 null 残留
            CONFIG.plugins = [];
            CONFIG.prePlugins = [];

            // 反序列化插件
            if (Array.isArray(CONFIG.pluginsSource)) {
                CONFIG.plugins = [];
                CONFIG.pluginsSource.forEach((src, idx) => {
                    const plugin = compilePluginFromSource(src);
                    if (typeof plugin === 'function') CONFIG.plugins.push(plugin);
                    else warn('插件反序列化失败 index=' + idx);
                });
            }
            // 反序列化【前置】插件
            if (Array.isArray(CONFIG.prePluginsSource)) {
                CONFIG.prePlugins = [];
                CONFIG.prePluginsSource.forEach((src, idx) => {
                    const plugin = compilePrePluginFromSource(src);
                    if (typeof plugin === 'function') CONFIG.prePlugins.push(plugin);
                    else warn('【前置】插件反序列化失败 index=' + idx);
                });
            }

            // 复原与同步 urlPatterns/urlPatternsRaw
            // 1) 优先使用持久化的原始字面值渲染（若存在）
            if (Array.isArray(parsed.urlPatternsRaw) && parsed.urlPatternsRaw.length > 0) {
                CONFIG.urlPatternsRaw = parsed.urlPatternsRaw.slice();
            } else if (Array.isArray(parsed.urlPatterns)) {
                // 兼容旧数据：从 toString() 结果生成字面值
                CONFIG.urlPatternsRaw = parsed.urlPatterns.map(p => String(p));
            }
            // 2) 将 Raw 同步为 RegExp
            if (Array.isArray(CONFIG.urlPatternsRaw)) {
                try {
                    CONFIG.urlPatterns = CONFIG.urlPatternsRaw.map(raw => revivePattern(raw) instanceof RegExp ? revivePattern(raw) : new RegExp(String(raw)));
                } catch {
            ensureUrlPatterns();
                }
            } else {
                // 兜底
                ensureUrlPatterns();
                CONFIG.urlPatternsRaw = CONFIG.urlPatterns.map(p => p.toString());
            }
        } catch (e) {
            warn('配置加载失败，使用默认配置:', e);
        }
    } else {
        info('没有找到保存的配置，使用默认配置');
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
    info('检查URL:', url);
    info('URL Pattern:', CONFIG.urlPatterns);

    const result = CONFIG.urlPatterns.some(p => {
        let regex = p;
        if (!(regex instanceof RegExp)) {
            const revived = revivePattern(regex);
            if (revived instanceof RegExp) {
                regex = revived;
            } else {
                try { regex = new RegExp(String(regex)); }
                catch { warn('urlPatterns 非法项被忽略:', regex); return false; }
            }
        }
        try { regex.lastIndex = 0; } catch { }
        const matches = regex.test(url);
        info(`正则匹配: ${regex} -> ${url} = ${matches}`);
        return matches;
    });

    info('最终结果:', result);
    return result;
}

// 归一化为绝对URL
function toAbsoluteUrl(input) {
    try {
        return new URL(input, location.href).href;
    } catch (e) {
        error("url归一化错误", e)
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
            try {
                return new RegExp(body, flags);
            } catch(e) {
                error("构造RegExp错误: " + patternLike, e);
            }
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
        try {
            return new RegExp(String(p)); 
        } catch(e) {
            error("ensureUrlPatterns error, use default", e);
            return /.*/;
        }
    });
}

// 保存配置到localStorage
function saveConfig() {
    try {
        const configToSave = {
            ...CONFIG,
            // 仅用于兼容旧版本的视图/回退
            urlPatterns: CONFIG.urlPatterns.map(pattern => pattern.toString()),
            // 新增：保存用户输入的原始字面值
            urlPatternsRaw: Array.isArray(CONFIG.urlPatternsRaw) ? CONFIG.urlPatternsRaw.slice() : CONFIG.urlPatterns.map(p => p.toString()),
            // 直接保存来源源码与元信息，避免丢失用户书写格式
            pluginsSource: Array.isArray(CONFIG.pluginsSource) ? CONFIG.pluginsSource.slice() : [],
            pluginsMeta: Array.isArray(CONFIG.pluginsMeta) ? CONFIG.pluginsMeta.slice() : []
        };
        // 保存【前置】插件源码与元信息
        configToSave.prePluginsSource = Array.isArray(CONFIG.prePluginsSource) ? CONFIG.prePluginsSource.slice() : [];
        configToSave.prePluginsMeta = Array.isArray(CONFIG.prePluginsMeta) ? CONFIG.prePluginsMeta.slice() : [];
        // 不保存运行时函数数组，避免被序列化为 null 破坏结构
        delete configToSave.plugins;
        delete configToSave.prePlugins;
        localStorage.setItem('httpMonitorConfig', JSON.stringify(configToSave));
    } catch (e) {
        error('配置保存失败:', e);
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            info('已复制到剪贴板');
            return true;
        }).catch(err => {
            error('现代API复制失败:', err);
            return fallbackCopyTextToClipboard(text);
        });
    } else {
        info('使用备用复制方法');
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
            info('备用方法复制成功');
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


function successToast(message) {
    // 显示成功消息（绿色 Toast，避免被 .http-monitor-alert 的红色样式覆盖）
    const okDiv = document.createElement('div');
    okDiv.className = 'http-monitor-toast';
    okDiv.textContent = message;
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
}


(function () {
    'use strict';
    initMenu()
    if (needHide()) return;

    // 存储原始fetch函数
    const originalFetch = window.fetch;
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    const originalSendBeacon = typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function'
        ? navigator.sendBeacon.bind(navigator)
        : null;

    // 运行时总开关（不卸载钩子，靠短路快速停用一切监控副作用）
    let RUNTIME_DISABLED = false;

    // 面向对象封装：统一启停与UI挂载/卸载
    class HttpMonitor {
        constructor() {
            this.started = false;
        }

        start() {
            if (this.started) return;
            RUNTIME_DISABLED = false;
            try { loadConfig(); } catch (e) { error('loadConfig failed', e); }
            try { this.mountUI(); } catch (e) { error('[mountUI] failed', e); }
            this.started = true;

            info('started');
        }

        stop() {
            if (!this.started) return;
            RUNTIME_DISABLED = true;
            try { this.unmountUI(); } catch (e) { error('[unmountUI] failed', e); }
            this.started = false;
            info('stopped');
        }

        mountUI() {
            // 若按钮已存在则不重复创建
            const existed = document.querySelector('.http-monitor-config-btn');
            if (!existed) {
                try { createConfigButton(); } catch (e) { error('createConfigButton error', e); }
            }
        }

        unmountUI() {
            // 移除配置按钮
            const btn = document.querySelector('.http-monitor-config-btn');
            if (btn && btn.parentElement) {
                try { btn.parentElement.removeChild(btn); } catch { }
            }
            // 关闭并移除弹窗容器
            const modalContainer = document.querySelector('div[http-monitor-config]');
            if (modalContainer && modalContainer.parentElement) {
                try { modalContainer.parentElement.removeChild(modalContainer); } catch { }
            }
        }
    }

    // 暴露单例（便于控制台/菜单调用）
    window.__httpMonitor = window.__httpMonitor || new HttpMonitor();

    // 提供全局关闭配置窗口方法，供 modal 内联 onclick 调用
    if (typeof window.httpMonitorCloseConfig !== 'function') {
        window.httpMonitorCloseConfig = () => {
            const modalContainer = document.querySelector('div[http-monitor-config]');
            if (modalContainer) {
                // 隐藏外部的modalContainer
                try { modalContainer.style.setProperty('display', 'none', 'important'); } catch { }
                // 隐藏内部的modal元素
                const shadowRoot = modalContainer.shadowRoot;
                const modal = shadowRoot && shadowRoot.querySelector('.http-monitor-config-modal');
                if (modal) {
                    try { modal.style.setProperty('display', 'none', 'important'); } catch { }
                }
            }
            if (Array.isArray(CONFIG.prePluginsSource)) {
                if (!Array.isArray(CONFIG.prePluginsMeta) || CONFIG.prePluginsMeta.length !== CONFIG.prePluginsSource.length) {
                    const used2 = new Set();
                    const meta2 = [];
                    CONFIG.prePluginsSource.forEach((_, idx) => {
                        let base = `【前置】plugin_${idx + 1}`;
                        let name = base; let i = 1;
                        while (used2.has(name)) { name = `${base}_${i++}`; }
                        used2.add(name);
                        meta2.push({ name, enabled: true, executionMode: 'inherit' });
                    });
                    CONFIG.prePluginsMeta = meta2;
                }
            }
        };
    }

    // 轻量包装 sendBeacon：仅记录调用信息，不拦截/阻塞（尊重运行时停用）
    if (originalSendBeacon) {
        try {
            navigator.sendBeacon = function (url, data) {
                try {
                    if (RUNTIME_DISABLED || !CONFIG.enabled) {
                        return originalSendBeacon(url, data);
                    }
                    const abs = toAbsoluteUrl(url);
                    if (shouldMonitor(abs)) {
                        info('[sendBeacon]', abs, data);
                    }
                } catch(e) {
                    error("record sendBeacon error", e)
                }
                return originalSendBeacon(url, data);
            };
        } catch(e) {
            error('[sendBeacon error]' + e);
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
        if (RUNTIME_DISABLED || !CONFIG.enabled) return;

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
                    urlProt = (u.protocol || '').replace(/:$/, '');
                    urlHost = u.host || '';
                    urlPath = u.pathname || '';
                    const parts = urlPath.split('/').filter(Boolean);
                    let sliceStartIndxe = 0;
                    if (urlPath.startsWith("/")) sliceStartIndxe = 1;
                    interfaceName = (urlPath.slice(sliceStartIndxe) || u.hostname || 'request').slice(-128);
                    interfaceName = decodeURIComponent(interfaceName).replace(/[^a-zA-Z0-9._-]+/g, '_');
                    if (!interfaceName) interfaceName = 'request';
                    
                }
            } catch(e) {
                error("alert and parser url error", e)
            }

            // 准备复制内容与显示内容（请求信息与错误信息过长时仅显示部分，但复制完整）
            const errorContent = message ? `${message}` : '';
            const fullRequestInfo = responseData && responseData.requestInfo ? String(responseData.requestInfo) : '';
            const REQ_TRUNC_LIMIT = Math.max(50, Number(CONFIG.alertRequestInfoDisplayLimit || 300));
            const displayRequestInfo = fullRequestInfo && fullRequestInfo.length > REQ_TRUNC_LIMIT
                ? `${fullRequestInfo.slice(0, REQ_TRUNC_LIMIT)}…(已省略${fullRequestInfo.length - REQ_TRUNC_LIMIT}字)`
                : fullRequestInfo;
            const WARN_TRUNC_LIMIT = REQ_TRUNC_LIMIT;
            const errorContentDisplay = (errorContent || '')
                .split('\n')
                .map(line => line.length > WARN_TRUNC_LIMIT
                    ? `${line.slice(0, WARN_TRUNC_LIMIT)}…(已省略${line.length - WARN_TRUNC_LIMIT}字)`
                    : line)
                .join('\n');

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
                (fullRequestInfo ? `参数: ${fullRequestInfo}\n` : '') +
                (responseData.headers ? `RespHeaders: ${(() => { try { return JSON.stringify(responseData.headers); } catch { return '' } })()}\n` : '') : `HTTP元信息为空`;

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
                    <div class="http-monitor-section-body">${errorContentDisplay}</div>
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
                                    comment: errorContent || '',
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
                        a.href = url; a.download = `${interfaceName || 'request'}_${ts}.har`;
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
                try { if (mo) { try { mo.disconnect(); } catch (e){error("MutationObserver disconnect error", e)} mo = null; } } catch { }
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
                    try { if (mo) mo.disconnect(); } catch(e) {error("MutationObserver disconnect error", e)}
                    finishOnce();
                }
            });
            mo.observe(document.body, { childList: true, subtree: true });

            info('HTTP响应监控:', message, responseData);
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
        } catch (e) {
            return {
                contentType: response.headers.get('content-type') || 'unknown',
                parsedBody: null,
                rawBody: body,
                size: body.length,
                error: e.message
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
        }, { __name: 'sizeLimit', __title: '响应体大小检查' }),
        Object.assign(function durationLimitPlugin({ durationMs }) {
            if (typeof durationMs === 'number' && durationMs > CONFIG.maxDurationMs) {
                return [`请求耗时过长: ${formatMilliseconds(durationMs)}`];
            }
            return [];
        }, { __name: 'durationLimit', __title: '请求耗时检查' }),
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
            const wrapped = `return function(ctx){\n  const { httpStatus, durationMs, sizeBytes, body, contentType } = ctx;\n  const warnings = [];\n  try {\n${trimmed}\n  } catch (e) {}\n  return warnings;\n}`;
            return new Function(wrapped)();
        } catch (e) {
            warn('插件编译失败:', e);
            return null;
        }
    }

    // 【前置】插件编译：请求发出前执行，提供请求上下文
    function compilePrePluginFromSource(src) {
        try {
            const trimmed = String(src || '').trim();
            // 支持完整函数写法：function(ctx){...} 或 (ctx)=>{...}
            if (/^(function|\()/i.test(trimmed)) {
                const fn = new Function('return (' + trimmed + ')')();
                if (typeof fn === 'function') return fn;
            }
            // 仅函数体写法：允许通过设置 block/message/headers/query/form/json/contentType 来生效
            const wrapped = `return function(ctx){\n  let { query, form, json, contentType, headers } = ctx || {};\n  let block = false;\n  let message = '';\n  try {\n${trimmed}\n  } catch (e) {}\n  const out = {};\n  if (block === true) out.block = true;\n  if (message && typeof message === 'string') out.message = message;\n  if (headers && typeof headers === 'object' && Object.keys(headers).length) out.headers = headers;\n  if (typeof query === 'string') out.query = query;\n  if (typeof form === 'string') out.form = form;\n  if (typeof json === 'string') out.json = json;\n  if (typeof contentType === 'string') out.contentType = contentType;\n  return out;\n}`;
            return new Function(wrapped)();
        } catch (e) {
            warn('【前置】插件编译失败:', e);
            return null;
        }
    }

    // 运行【前置】插件，支持阻断与修改请求（headers/query/body/contentType）
    function runPrePlugins(preCtx) {
        let messages = []
        const result = { blocked: false, message: '', headers: {}, query: null, form: null, json: null, contentType: null };
        if (!Array.isArray(CONFIG.prePlugins) || !Array.isArray(CONFIG.prePluginsMeta)) return { result, ctx: preCtx };
        let ctx = { ...preCtx, headers: { ...(preCtx.headers || {}) } };
        CONFIG.prePlugins.forEach((fn, idx) => {
            const meta = CONFIG.prePluginsMeta[idx] || {}; if (meta.enabled === false || typeof fn !== 'function') return;
            try {
                const out = fn(ctx);
                if (Array.isArray(out)) return; // 兼容仅返回 warnings 的旧风格
                if (out && typeof out === 'object') {
                    if (out.block === true) { result.blocked = true; if (out.message) messages.push(String(out.message)); }
                    if (out.headers && typeof out.headers === 'object') { Object.assign(result.headers, out.headers); Object.assign(ctx.headers, out.headers); }
                    if (typeof out.query === 'string') { result.query = out.query; ctx.query = out.query; }
                    if (typeof out.form === 'string') { result.form = out.form; ctx.form = out.form; ctx.json = null; }
                    if (typeof out.json === 'string') { result.json = out.json; ctx.json = out.json; ctx.form = null; }
                    if (typeof out.contentType === 'string') { result.contentType = out.contentType; ctx.contentType = out.contentType; }
                }
            } catch (e) { warn('【前置】执行错误', e); }
        });
        result.message = messages.join("\n")
        return { result, ctx };
    }

    // Worker 沙箱：单例 worker
    let pluginWorker = null;
    let pluginWorkerBusy = false;
    let pluginWorkerIdleTimer = null;
    let pluginWorkerQueue = [];
    let pluginWorkerLoaded = false;
    function buildWorkerCode(){
        return `(()=>{\nlet loadedFns=null;\nfunction compileOne(src){const s=String(src||'').trim();if(/^(function|\\()/i.test(s)){return (new Function('return ('+s+')'))();}const w='return function(ctx){\\n  const { httpStatus, durationMs, sizeBytes, body, contentType } = ctx;\\n  const warnings = [];\\n  try {\\n'+s+'\\n  } catch (e) {}\\n  return warnings;\\n}';return (new Function(w))();}\nself.onmessage=async(e)=>{const d=e.data||{};const {id,type}=d;try{if(type==='load'){const sources=Array.isArray(d.sources)?d.sources:[];loadedFns=sources.map(s=>{try{return compileOne(s)}catch(e){return null}}).filter(fn=>typeof fn==='function');self.postMessage({id,ok:true,loaded:(loadedFns?loadedFns.length:0)});return;}if(type==='run'){let fns=loadedFns; if(!fns){const sources=Array.isArray(d.sources)?d.sources:[];fns=sources.map(s=>{try{return compileOne(s)}catch(e){return null}}).filter(fn=>typeof fn==='function');}const ctx=d.context||{};const out=[];for(let i=0;i<(fns?fns.length:0);i++){try{const res=fns[i](ctx)||[];for(const w of res) out.push(w);}catch(e){}}const max= typeof d.maxWarnings==='number'?d.maxWarnings:50;const trimmed=out.slice(0,Math.max(0,max));self.postMessage({id,ok:true,warnings:trimmed});return;}self.postMessage({id,ok:false,error:'unknown_type'});}catch(err){self.postMessage({id,ok:false,error:String(err)})}};\n})();`;
    }
    function ensurePluginWorker() {
        if (pluginWorker) return pluginWorker;
        const blob = new Blob([buildWorkerCode()], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        pluginWorker = new Worker(url);
        URL.revokeObjectURL(url);
        pluginWorkerLoaded = false;
        return pluginWorker;
    }
    function scheduleWorkerIdle() {
        try { if (pluginWorkerIdleTimer) clearTimeout(pluginWorkerIdleTimer); } catch {}
        const idleMs = Math.max(5, Number(CONFIG.workerIdleSeconds || 15)) * 1000;
        pluginWorkerIdleTimer = setTimeout(() => {
            try { if (pluginWorker) { pluginWorker.terminate(); pluginWorker = null; pluginWorkerLoaded = false; } } catch {}
        }, idleMs);
    }
    async function runInReuseWorker(sources, context, rawBytes) {
        const maxConc = Math.max(1, Number(CONFIG.workerMaxConcurrency || 1));
        return new Promise((resolve) => {
            const task = async () => {
                pluginWorkerBusy = true;
                const w = ensurePluginWorker();
                const reqId = 'w_' + Math.random().toString(36).slice(2);
                const timeoutMs = Math.max(1000, Number(CONFIG.pluginWorkerTimeoutMs || 60000));
                const onMsg = (ev) => {
                    const data = ev.data || {};
                    if (data.id === reqId) {
                        try { w.removeEventListener('message', onMsg); } catch {}
                        clearTimeout(timer);
                        pluginWorkerBusy = false;
                        scheduleWorkerIdle();
                        resolve(data);
                        // 处理队列
                        const next = pluginWorkerQueue.shift();
                        if (next) next();
                    }
                };
                w.addEventListener('message', onMsg);
                const post = () => {
                    const payload = { id: reqId, type: 'run', sources, context, maxWarnings: Number(CONFIG.maxWarningsPerRun || 50) };
                    if (rawBytes && rawBytes.byteLength > 0) {
                        try { w.postMessage({ ...payload, rawBytes }, [rawBytes]); } catch { w.postMessage({ ...payload, rawBytes }); }
                    } else {
                        w.postMessage(payload);
                    }
                };
                if (!pluginWorkerLoaded) {
                    const loadId = 'l_' + Math.random().toString(36).slice(2);
                    const onLoad = (e2) => { const d = e2.data || {}; if (d.id === loadId) { try { w.removeEventListener('message', onLoad); } catch {} pluginWorkerLoaded = true; post(); } };
                    w.addEventListener('message', onLoad);
                    w.postMessage({ id: loadId, type: 'load', sources });
                } else {
                    post();
                }
                const timer = setTimeout(() => {
                    try { w.terminate(); } catch(e) {error("worker中断错误", e)} pluginWorker = null; pluginWorkerLoaded = false; pluginWorkerBusy = false; resolve({ ok:false, error:'timeout' });
                }, timeoutMs);
            };
            // 简单串行队列
            if (pluginWorkerBusy || (maxConc <= 1 && pluginWorkerQueue.length > 0)) pluginWorkerQueue.push(task);
            else task();
        });
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
        const collapsible = itemNode.querySelector('.plugin-code-collapsible');
        const fullscreenBtn = itemNode.querySelector('.plugin-fullscreen-btn');
        const formatBtn = itemNode.querySelector('.plugin-format-btn');
        const copyBtn = itemNode.querySelector('.plugin-content-copy');

        // 初始化高亮
        if (overlay && codeArea) {
            const updateOverlay = () => {
            overlay.innerHTML = highlightCodeToHtml(codeArea.value);
                overlay.scrollTop = codeArea.scrollTop;
                // 空内容时隐藏覆盖层，展示 placeholder
                if ((codeArea.value || '').trim() === '') {
                    overlay.style.display = 'none';
                } else {
                    overlay.style.display = 'block';
                }
            };
            updateOverlay();
            codeArea.addEventListener('input', updateOverlay);
            codeArea.addEventListener('scroll', () => {
                overlay.scrollTop = codeArea.scrollTop;
            });
            // 默认折叠
            if (collapsible && typeof collapsible.open === 'boolean') {
                collapsible.open = false;
            }
            // 双击覆盖层进入/退出全屏（reparent 到 fullscreen-layer）
            overlay.addEventListener('dblclick', (e) => {
                e.preventDefault(); e.stopPropagation();
                const wrapper = codeArea.closest('.plugin-code-wrapper');
                if (!wrapper) return;
                const layer = ensureFullscreenLayer(shadowRoot);
                const isActive = layer && layer.contains(wrapper);
                if (!isActive) {
                    enterPluginFullscreen(shadowRoot, wrapper, codeArea, overlay);
                } else {
                    exitPluginFullscreen(shadowRoot, wrapper, codeArea, overlay);
                }
            });
        }

        // 全屏切换（reparent 到 fullscreen-layer）
        if (fullscreenBtn && codeArea && overlay) {
            let isFull = false;
            const getWrapper = () => codeArea.closest('.plugin-code-wrapper');
            const toggleFull = () => {
                const wrapper = getWrapper();
                if (!wrapper) return;
                if (!isFull) {
                    enterPluginFullscreen(shadowRoot, wrapper, codeArea, overlay);
                } else {
                    exitPluginFullscreen(shadowRoot, wrapper, codeArea, overlay);
                }
                isFull = !isFull;
            };
            fullscreenBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggleFull(); });
            // Esc 退出全屏
            codeArea.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isFull) {
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
                if ((codeArea.value || '').trim() === '') {
                    overlay.style.display = 'none';
                } else {
                    overlay.style.display = 'block';
                }
            });
        }

        // 复制代码
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                codeArea.value = codeArea.value.trim();
                navigator.clipboard.writeText(codeArea.value);
                successToast('代码已复制');
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
        container.innerHTML = (CONFIG.pluginsMeta || []).map((meta, index) =>
            renderPluginItemHTML(meta, index, (CONFIG.pluginsSource && CONFIG.pluginsSource[index]) || '', false)
        ).join('');
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
        // 重建后，确保工具控件存在且绑定
        ensurePluginControls(shadowRoot);

        // 同步重建【前置】插件列表
        const preContainer = shadowRoot.querySelector('#pre-plugins');
        if (preContainer) {
            preContainer.innerHTML = (CONFIG.prePluginsMeta || []).map((meta, index) =>
                renderPluginItemHTML(meta, index, (CONFIG.prePluginsSource && CONFIG.prePluginsSource[index]) || '', true)
            ).join('');
            preContainer.querySelectorAll('.plugin-item').forEach(item => {
                const removeBtn = item.querySelector('.remove-plugin-btn');
                if (removeBtn) removeBtn.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); removePrePluginItem(shadowRoot, item); });
                attachPluginEditorBehavior(shadowRoot, item);
            });
        }
    }

    // 删除一个【前置】插件条目，并更新配置与UI
    function removePrePluginItem(shadowRoot, itemNode) {
        try {
            const preContainer = shadowRoot.querySelector('#pre-plugins');
            if (!preContainer || !itemNode) { try { itemNode && itemNode.remove(); } catch {} return; }
            const items = Array.from(preContainer.querySelectorAll('.plugin-item'));
            const idx = items.indexOf(itemNode);
            if (idx >= 0) {
                try { itemNode.remove(); } catch {}
                try {
                    if (Array.isArray(CONFIG.prePluginsSource)) CONFIG.prePluginsSource.splice(idx, 1);
                    if (Array.isArray(CONFIG.prePluginsMeta)) CONFIG.prePluginsMeta.splice(idx, 1);
                    if (Array.isArray(CONFIG.prePlugins)) CONFIG.prePlugins.splice(idx, 1);
                } catch {}
                try { saveConfig(); } catch {}
                // 重建 UI 以刷新索引
                const preList = shadowRoot.querySelector('#pre-plugins');
                if (preList) {
                    preList.innerHTML = (CONFIG.prePluginsMeta || []).map((m,i)=>
                        renderPluginItemHTML(m, i, (CONFIG.prePluginsSource && CONFIG.prePluginsSource[i]) || '', true)
                    ).join('');
                    preList.querySelectorAll('.plugin-item').forEach(item=>{ const btn=item.querySelector('.remove-plugin-btn'); if (btn) btn.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); removePrePluginItem(shadowRoot, item); }); attachPluginEditorBehavior(shadowRoot, item); });
                }
            } else {
                // 回退：仅移除 DOM
                try { itemNode.remove(); } catch {}
            }
        } catch (e) { warn('removePrePluginItem error', e); try { itemNode && itemNode.remove(); } catch {} }
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

    // 全屏返回位置记录
    const fullscreenReturnMap = new WeakMap();

    function ensureFullscreenLayer(shadowRoot) {
        let layer = shadowRoot.querySelector('.plugin-code-fullscreen-layer');
        if (!layer) {
            layer = document.createElement('div');
            layer.className = 'plugin-code-fullscreen-layer';
            shadowRoot.appendChild(layer);
        }
        return layer;
    }

    function enterPluginFullscreen(shadowRoot, wrapper, codeArea, overlay) {
        if (!wrapper) return;
        const layer = ensureFullscreenLayer(shadowRoot);
        if (!fullscreenReturnMap.has(wrapper)) {
            fullscreenReturnMap.set(wrapper, { parent: wrapper.parentElement, next: wrapper.nextSibling });
        }
        layer.appendChild(wrapper);
        layer.classList.add('active');
        if (overlay) overlay.style.display = 'none';
        if (codeArea) {
            codeArea.focus();
            codeArea.style.color = '#111';
            codeArea.style.background = '#fff';
        }
    }

    function exitPluginFullscreen(shadowRoot, wrapper, codeArea, overlay) {
        if (!wrapper) return;
        const info = fullscreenReturnMap.get(wrapper);
        if (info && info.parent) {
            if (info.next && info.next.parentElement === info.parent) {
                info.parent.insertBefore(wrapper, info.next);
            } else {
                info.parent.appendChild(wrapper);
            }
        }
        const layer = shadowRoot.querySelector('.plugin-code-fullscreen-layer');
        if (layer && layer.childElementCount === 0) {
            layer.classList.remove('active');
        }
        if (overlay) overlay.style.display = '';
        if (codeArea) {
            codeArea.style.color = '';
            codeArea.style.background = '';
            codeArea.focus();
        }
    }

    // 渲染插件代码编辑器（覆盖层 + textarea）
    function renderPluginCodeEditorHTML(initialSource) {
            // 后置插件占位文本（处理响应）
        const PLUGIN_CODE_PLACEHOLDER = `// 仅填写主体，无需 function/return
// 可用: httpStatus, durationMs, sizeBytes, body, rawBody, contentType
// 将文本告警 push 到 warnings 数组
// 示例: if (httpStatus >= 500) { warnings.push('服务异常'); }
// 也支持完整函数: function(ctx){ /*...*/ return [] } 或 (ctx)=>[]`;
        const source = (initialSource || '');
        return `
                <details class="plugin-code-collapsible" open>
                    <summary class="plugin-code-summary">插件代码（点击折叠/展开）</summary>
                <div class="plugin-code-wrapper">
                    <pre class="plugin-code-overlay"></pre>
                    <textarea class="http-monitor-config-textarea plugin-code" placeholder="${PLUGIN_CODE_PLACEHOLDER.replace(/"/g, '&quot;')}">${source}</textarea>
                    </div>
                </details>`;
    }

    // 渲染【前置】插件代码编辑器（不同占位提示）
    function renderPrePluginCodeEditorHTML(initialSource) {
        const PRE_PLUGIN_CODE_PLACEHOLDER = `// 仅填写主体，无需 function/return
// 可用: query, form, json, contentType, headers
// 可设置: block(布尔), message(字符串), headers(对象), query/form/json/contentType(字符串)
// 示例1：追加Header
// headers = { ...(headers||{}), 'X-Debug': '1' };
// 示例2：阻断请求
// block = true; message = 'blocked by pre-plugin';
// 示例3：改写JSON请求体
// try { const obj = JSON.parse(json||'{}'); obj.injected = true; json = JSON.stringify(obj); contentType = 'application/json'; } catch {}
// 也支持完整函数: function(ctx){ /*...*/ return { headers, json, contentType } }`;
        const source = (initialSource || '');
        return `
                <details class="plugin-code-collapsible" open>
                    <summary class="plugin-code-summary">插件代码（点击折叠/展开）</summary>
                <div class="plugin-code-wrapper">
                    <pre class="plugin-code-overlay"></pre>
                    <textarea class="http-monitor-config-textarea plugin-code" placeholder="${PRE_PLUGIN_CODE_PLACEHOLDER.replace(/"/g, '&quot;')}">${source}</textarea>
                    </div>
                </details>`;
    }

    // 渲染插件工具栏
    function renderPluginToolbarHTML() {
        return `
                <div class="plugin-toolbar">
                    <button class="remove-plugin-btn">删除</button>
                    <button class="plugin-format-btn">格式化</button>
                    <button class="plugin-fullscreen-btn">全屏/还原</button>
                    <button class="plugin-content-copy">复制</button>
                </div>`;
    }

    // 通用：渲染单个插件项（前置/后置一致的两行头部 + 工具栏 + 代码编辑器）
    function renderPluginItemHTML(meta, index, source, isPre) {
        const m = meta || {};
        const name = (m.name || '').replace(/\"/g, '&quot;');
        const exec = m.executionMode;
        const timeoutVal = (typeof m.timeoutMs === 'number') ? m.timeoutMs : '';
        const editorHTML = isPre ? renderPrePluginCodeEditorHTML(source || '') : renderPluginCodeEditorHTML(source || '');
        return `
            <div class=\"http-monitor-config-url-pattern plugin-item\" data-index=\"${index}\">\n\
                <div class=\"plugin-header\"> \n\
                    <input type=\"text\" class=\"http-monitor-config-input plugin-name\" value=\"${name}\" placeholder=\"插件名称（唯一）\"> \n\
                    <label><input type=\"checkbox\" class=\"plugin-enabled\" ${m.enabled !== false ? 'checked' : ''}><b>启用</b></label>\n\
                </div>\n\
                <div class=\"plugin-header\">\n\
                    <label style=\"width:100%; height:100%;\">\n\
                        <label><b>执行模式:</b></label>\n\
                        <select class=\"plugin-exec-mode\"> \n\
                        <option value=\"inherit\" ${(exec === 'inherit' || !exec) ? 'selected' : ''}>继承</option>\n\
                        <option value=\"reuse\" ${exec === 'reuse' ? 'selected' : ''}>重用Worker</option>\n\
                        <option value=\"spawn\" ${exec === 'spawn' ? 'selected' : ''}>重建Worker</option>\n\
                        </select>\n\
                        <label><b>超时(ms):</b></label>\n\
                        <input type=\"number\" class=\"plugin-timeout\" value=\"${timeoutVal}\" placeholder=\"继承全局\">\n\
                    </label>\n\
                </div>\n\
                ${renderPluginToolbarHTML()}\n\
                ${editorHTML}\n\
            </div>`;
    }

    // 渲染 URL Pattern 行
    function renderUrlPatternRowHTML(patternValue) {
        return `
                            <div class="http-monitor-config-url-pattern">
                                <input type="text" class="http-monitor-config-input" value="${(patternValue || '').toString().replace(/"/g, '&quot;')}"
                                       placeholder="例如: /api/.* 或 .*">
                                <button class="remove-pattern-btn" type="button" aria-label="删除此规则" title="删除">
                                    &times;
                                </button>
                            </div>`;
    }

    // 运行插件以检查响应体内容
    async function checkResponseContent(parsedData, meta) {
        const warnings = [];

        const context = {
            httpStatus: meta && typeof meta.status === 'number' ? meta.status : undefined,
            durationMs: meta && typeof meta.durationMs === 'number' ? meta.durationMs : undefined,
            sizeBytes: parsedData.size,
            body: parsedData.parsedBody,
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
                if (CONFIG.metrics && dt > 1) info(`[metrics] builtin ${key} took ${Math.round(dt)}ms`);
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

            // 1) reuse 组：单 Worker 执行（仅在非低风险且未启用 metaOnly 时进入）
            if (reuseSources.length > 0 && !CONFIG.metaOnly) {
                try {
                    const lightContext = { httpStatus: meta && typeof meta.status === 'number' ? meta.status : undefined,
                        durationMs: meta && typeof meta.durationMs === 'number' ? meta.durationMs : undefined,
                        sizeBytes: parsedData && typeof parsedData.size === 'number' ? parsedData.size : undefined,
                        contentType: parsedData ? parsedData.contentType : undefined };
                    // 仅在需要且类型允许时发送原始字节（transferable）
                    const tStart = performance.now();
                    const out = await runInReuseWorker(reuseSources.map(r => r.src), lightContext, null);
                    if (CONFIG.metrics) info(`[metrics] worker-reuse run took ${Math.round(performance.now()-tStart)}ms`);
                    if (out && out.ok && Array.isArray(out.warnings)) {
                        for (const ww of out.warnings) warnings.push(ww);
                    } else if (out && out.error === 'timeout') {
                        warn('[plugin-worker] execution timeout');
                    }
                } catch (e) {
                    warn('[plugin-worker] failed, fallback main thread:', e);
                    mainThreadIdx.push(...reuseSources.map(r => r.idx));
                }
            }

            // 2) spawn 组：逐个创建临时 Worker（仅在非低风险且未启用 metaOnly 时进入）
            for (const item of spawnSources) {
                if (CONFIG.metaOnly) break;
                try {
                    const blobUrl = URL.createObjectURL(new Blob([`self.onmessage=e=>{const{ id,src,ctx }=e.data||{};try{let fn=null;const s=String(src||'').trim();if(/^(function|\\()/i.test(s)){fn=(new Function('return ('+s+')'))();}else{const w='return function(ctx){\\n  const { httpStatus, durationMs, sizeBytes, body, contentType } = ctx;\\n  const warnings = [];\\n  try {\\n'+src+'\\n  } catch (e) {}\\n  return warnings;\\n}';fn=(new Function(w))();}const res=fn?fn(ctx)||[]:[];self.postMessage({id,ok:true,warnings:res});}catch(err){self.postMessage({id,ok:false,error:String(err)})}};`], { type: 'application/javascript' }));
                    const worker = new Worker(blobUrl);
                    const execId = 's_' + Math.random().toString(36).slice(2);
                    const timeoutMs = Math.max(1000, Number(item.meta.timeoutMs || CONFIG.pluginWorkerTimeoutMs || 60000));
                    const pr = new Promise((resolve) => {
                        const onMsg = (ev) => { const d = ev.data || {}; if (d.id === execId) { worker.removeEventListener('message', onMsg); resolve(d); } };
                        worker.addEventListener('message', onMsg);
                        worker.postMessage({ id: execId, src: item.src, ctx: { httpStatus: meta && typeof meta.status==='number'?meta.status:undefined, durationMs: meta && typeof meta.durationMs==='number'?meta.durationMs:undefined, sizeBytes: parsedData && typeof parsedData.size==='number'?parsedData.size:undefined, contentType: parsedData?parsedData.contentType:undefined } });
                    });
                    let res = null; let timed2 = false; const tmr = setTimeout(() => { try { worker.terminate(); } catch(e) {error("worker中断错误", e)} try { URL.revokeObjectURL(blobUrl); } catch(e) {error("revokeObjectURL error in worker", e)} res = { ok: false, error: 'timeout' }; timed2 = true; }, timeoutMs);
                    res = await pr; clearTimeout(tmr); try { worker.terminate(); } catch(e) {error("worker中断错误", e)} try { URL.revokeObjectURL(blobUrl); } catch(e) {error("revokeObjectURL error in worker", e)}
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
                if (CONFIG.metrics && dt > 1) info(`[metrics] custom ${meta.name || idx} took ${Math.round(dt)}ms`);
                    for (const w of result) warnings.push(w);
                } catch (e) { warn('插件执行错误(custom):', e); }
            });
        }

        return warnings;
    }

    // 拦截fetch请求
    window.fetch = async function (...args) {
        if (RUNTIME_DISABLED || !CONFIG.enabled) {
            return originalFetch.apply(this, args);
        }
        // 如果配置了排除fetch请求，直接返回原始fetch
        if (CONFIG.excludeFetch) {
            return originalFetch.apply(this, args);
        }

        const [resource, options = {}] = args;
        const rawUrl = typeof resource === 'string' ? resource : resource.url;
        const url = toAbsoluteUrl(rawUrl);
        const method = (options && options.method) || (resource && typeof resource === 'object' && resource.method) || 'GET';
        const methodUpper = String(method).toUpperCase();
        // 跳过 CORS 预检（OPTIONS）请求，避免干预造成失败
        if (methodUpper === 'OPTIONS') {
            return originalFetch.apply(this, args);
        }
        // 对未命中监控规则的请求，不运行前置插件，直接透传，避免无意添加自定义头引发 CORS 预检
        try {
            if (!shouldMonitor(url) || !CONFIG.methods.includes(method)) {
                return originalFetch.apply(this, args);
            }
        } catch {}

        // 监控判断放到前置插件之后（前置插件总是先运行）

        // 跳过 keepalive（卸载阶段 fire-and-forget，不应阻塞）
        if (options && options.keepalive === true) {
            return originalFetch.apply(this, args);
        }

        try {
            
            // 【前置】插件执行（请求前）
            try {
                const hdrs = {};
                const inHeaders = options && options.headers ? options.headers : (resource && resource.headers);
                if (inHeaders) {
                    if (typeof inHeaders.forEach === 'function') { inHeaders.forEach((v,k)=>{ hdrs[k]=v; }); }
                    else if (typeof inHeaders === 'object') { for (const k in inHeaders) hdrs[k] = inHeaders[k]; }
                }
                let query=''; let form=''; let json=''; let ctype=hdrs['content-type']||hdrs['Content-Type']||'';
                try { const u=new URL(url); query = u.search ? u.search.slice(1) : ''; } catch {}
                if (options && options.body) {
                    if (typeof options.body === 'string') {
                        if (/^[{\[]/.test(options.body)) json = options.body; else form = options.body;
                    } else if (options.body instanceof URLSearchParams) { form = options.body.toString(); }
                    else if (typeof FormData !== 'undefined' && options.body instanceof FormData) { const pairs=[]; for (const [k,v] of options.body.entries()) pairs.push(`${k}=${v}`); form = pairs.join('&'); }
                    else { try { json = JSON.stringify(options.body); } catch {} }
                }
                const preCtx = { query, form, json, contentType: ctype, headers: hdrs };
                const { result: preRes, ctx: newCtx } = runPrePlugins(preCtx);
                if (preRes.blocked) {
                    if (CONFIG.metrics) warn(`[前置] 阻断请求: ${preRes.message || ''}`);
                    try {
                        const reqInfo = (() => {
                            try {
                                const parts = [];
                                if (typeof newCtx.query === 'string' && newCtx.query) parts.push(`query=${newCtx.query}`);
                                if (typeof newCtx.form === 'string' && newCtx.form) parts.push(`form=${newCtx.form}`);
                                if (typeof newCtx.json === 'string' && newCtx.json) parts.push(`json=${newCtx.json}`);
                                return parts.join(' ');
                            } catch { return ''; }
                        })();
                        showAlert(preRes.message || 'blocked by pre-plugin', {
                            url,
                            status: 499,
                            size: 0,
                            method,
                            durationMs: 0,
                            requestInfo: reqInfo
                        });
                    } catch {}
                    return new Response(preRes.message || 'blocked by pre-plugin', { status: 499 });
                }
                const hOut = newCtx.headers || {};
                const hasHeaderChanges = hOut && Object.keys(hOut).length > 0;
                const hasBodyChanges = (typeof newCtx.json === 'string') || (typeof newCtx.form === 'string');
                const hasQueryChange = typeof newCtx.query === 'string' && newCtx.query !== ((() => { try { const u=new URL(url); return u.search?u.search.slice(1):''; } catch { return ''; } })());
                // 若前置插件未做任何修改，直接透传
                if (!hasHeaderChanges && !hasBodyChanges && !hasQueryChange) {
                    return originalFetch.apply(this, args);
                }

                const headersInit = new Headers();
                if (inHeaders) {
                    if (typeof inHeaders.forEach === 'function') { inHeaders.forEach((v,k)=>headersInit.set(k,v)); }
                    else if (typeof inHeaders === 'object') { for (const k in inHeaders) headersInit.set(k, inHeaders[k]); }
                }
                for (const k in hOut) headersInit.set(k, hOut[k]);
                let bodyOut = options.body;
                if (typeof newCtx.json === 'string') { bodyOut = newCtx.json; headersInit.set('Content-Type', newCtx.contentType || 'application/json'); }
                else if (typeof newCtx.form === 'string') { bodyOut = newCtx.form; headersInit.set('Content-Type', newCtx.contentType || 'application/x-www-form-urlencoded'); }
                // 合并并尽量保留原始 Request 的关键信息（credentials/mode 等），避免引发或影响 CORS 预检
                const mergedInit = (() => {
                    const init = { ...(options || {}) };
                    try {
                        if (typeof Request !== 'undefined' && resource instanceof Request) {
                            init.method = init.method || resource.method;
                            init.mode = init.mode || resource.mode;
                            init.credentials = init.credentials || resource.credentials;
                            init.cache = init.cache || resource.cache;
                            init.redirect = init.redirect || resource.redirect;
                            init.referrer = init.referrer || resource.referrer;
                            init.referrerPolicy = init.referrerPolicy || resource.referrerPolicy;
                            init.integrity = init.integrity || resource.integrity;
                            init.keepalive = init.keepalive || resource.keepalive;
                            if (!init.signal && resource.signal) init.signal = resource.signal;
                        }
                    } catch {}
                    init.headers = headersInit;
                    init.body = bodyOut;
                    const nm = String((init.method || method) || 'GET').toUpperCase();
                    if (nm === 'GET' || nm === 'HEAD') { try { delete init.body; } catch {} }
                    return init;
                })();
                args[1] = mergedInit;
                if (typeof newCtx.query === 'string') { try { const u = new URL(url); u.search = newCtx.query ? ('?' + newCtx.query) : ''; args[0] = (typeof resource === 'string') ? u.href : new Request(u.href, mergedInit); } catch {} }
            } catch(e) { warn('【前置】执行失败', e); }

            // 重新计算最终 URL，并再做监控判断（允许前置插件修改后再校验）
            try {
                const finalUrl = toAbsoluteUrl(typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url));
                const finalMethod = (args[1] && args[1].method) || method || 'GET';
                if (!shouldMonitor(finalUrl) || !CONFIG.methods.includes(finalMethod)) {
                    return originalFetch.apply(this, args);
                }
            } catch {}

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
                    // 收集响应 headers（用于后置插件）
                    const respHeaders = {}; try { response.headers && response.headers.forEach && response.headers.forEach((v,k)=>{ respHeaders[k]=v; }); } catch {}
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
                        const warnings = await checkResponseContent(parsedData, { status: response.status, durationMs: 0, headers: respHeaders });
                        if (warnings.length > 0) {
                            const message = (warnings || []).map(w => String(w)).join('\n');
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
                    const warnings = await checkResponseContent(parsedData, { status: response.status, durationMs, headers: respHeaders });

                    if (warnings.length > 0) {
                        const message = (warnings || []).map(w => String(w)).join('\n');
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
        } catch (e) {
            error('HTTP监控错误:', e);
            return originalFetch.apply(this, args);
        }
    };

    // 拦截XMLHttpRequest
    // 记录 setRequestHeader 以便【前置】插件读取（延后实际设置到 send 前统一应用）
    const _origSetHeader = XMLHttpRequest.prototype.setRequestHeader;
    XMLHttpRequest.prototype.setRequestHeader = function(k, v){
        // 当运行时停用/隐藏/未启用时，直接调用原始实现，避免影响业务请求与响应类型
        if (RUNTIME_DISABLED || !CONFIG.enabled) {
            try { return _origSetHeader.call(this, k, v); } catch { return undefined; }
        }
        // 若未初始化监控（例如 OPTIONS 预检在 open 阶段被跳过），不拦截 header
        if (!this._monitorMethod || !this._monitorUrl) {
            try { return _origSetHeader.call(this, k, v); } catch { return undefined; }
        }
        // 跳过 CORS 预检（OPTIONS）请求的 header 拦截
        try { if (String(this._monitorMethod).toUpperCase() === 'OPTIONS') { return _origSetHeader.call(this, k, v); } } catch {}
        // 对未纳入监控的请求，不拦截 header，直接透传，避免无意触发 CORS 预检
        try {
            const method = this._monitorMethod || 'GET';
            const abs = toAbsoluteUrl(this._monitorUrl || '');
            if (!shouldMonitor(abs) || !CONFIG.methods.includes(method)) {
                return _origSetHeader.call(this, k, v);
            }
        } catch {}
        // 恢复到稳定路径：先缓存到 map，最终在 send 时统一合并再 set
        this._headersSet = this._headersSet || [];
        this._headersSetMap = this._headersSetMap || {};
        this._headersSet.push([k, v]);
        this._headersSetMap[k] = v;
        return undefined;
    };

    XMLHttpRequest.prototype.open = function (method, url, ...args) {
        // 跳过 CORS 预检（OPTIONS）
        if (String(method).toUpperCase() === 'OPTIONS') {
            return originalXHROpen.apply(this, [method, url, ...args]);
        }
        if (RUNTIME_DISABLED || !CONFIG.enabled || !shouldMonitor(toAbsoluteUrl(url)) || !CONFIG.methods.includes(method)) {
            return originalXHROpen.apply(this, [method, url, ...args]);
        }
        this._monitorMethod = method;
        this._monitorUrl = url;
        this._monitorStartTs = performance.now();
        this._monitorBound = false;
        this._monitorTooLarge = false;
        this._monitorCL = 0;
        // 初始化请求头缓存
        this._headersSet = [];
        this._headersSetMap = {};
        return originalXHROpen.apply(this, [method, url, ...args]);
    };

    XMLHttpRequest.prototype.send = function (data) {
        if (RUNTIME_DISABLED || !CONFIG.enabled) {
            return originalXHRSend.call(this, data);
        }
        const xhr = this;
        // 若未在 open 阶段初始化（例如 OPTIONS 预检被跳过），直接透传
        if (!xhr._monitorMethod || !xhr._monitorUrl) {
            return originalXHRSend.call(this, data);
        }
        const method = xhr._monitorMethod || 'GET';
        if (String(method).toUpperCase() === 'OPTIONS') {
            return originalXHRSend.call(this, data);
        }
        const url = toAbsoluteUrl(xhr._monitorUrl || '');
        // 对未命中监控规则的请求，不运行前置插件，直接发送，避免无意添加自定义头引发 CORS 预检
        try {
            if (!shouldMonitor(url) || !CONFIG.methods.includes(method)) {
                return originalXHRSend.call(this, data);
            }
        } catch {}
        // 确保即使不监控也先运行前置插件（日志/阻断/修改）
        // 仅当 needHide/禁用 时已在上面 return；其余场景继续
        // 【前置】插件（XHR） 支持阻断与修改；在此阶段不实际设置 header，待合并后统一设置
        try {
            const hdrs = { ...(xhr._headersSetMap || {}) };
            let query=''; try { const u=new URL(url); query=u.search?u.search.slice(1):''; } catch{}
            let form=''; let json=''; let ctype=hdrs['content-type']||hdrs['Content-Type']||'';
            if (data) {
                if (typeof data === 'string') { if (/^[{\[]/.test(data)) json=data; else form=data; }
                else if (data instanceof URLSearchParams) { form=data.toString(); }
                else if (typeof FormData !== 'undefined' && data instanceof FormData) { const pairs=[]; for (const [k,v] of data.entries()) pairs.push(`${k}=${v}`); form=pairs.join('&'); }
                else { try { json = JSON.stringify(data); } catch{} }
            }
            const preCtx = { query, form, json, contentType: ctype, headers: { ...hdrs } };
            const { result: preRes, ctx: newCtx } = runPrePlugins(preCtx);
            if (preRes.blocked) {
                if (CONFIG.metrics) warn(`[前置][XHR] 阻断请求: ${preRes.message || ''}`);
                try {
                    const reqInfo = (() => {
                        try {
                            const parts = [];
                            if (typeof newCtx.query === 'string' && newCtx.query) parts.push(`query=${newCtx.query}`);
                            if (typeof newCtx.form === 'string' && newCtx.form) parts.push(`form=${newCtx.form}`);
                            if (typeof newCtx.json === 'string' && newCtx.json) parts.push(`json=${newCtx.json}`);
                            return parts.join(' ');
                        } catch { return ''; }
                    })();
                    showAlert(preRes.message || 'blocked by pre-plugin', {
                        url,
                        status: 499,
                        size: 0,
                        method,
                        durationMs: 0,
                        requestInfo: reqInfo
                    });
                } catch {}
                return; // 阻断
            }
            // 合并覆盖 headers
            xhr._headersSetMap = xhr._headersSetMap || {};
            if (newCtx.headers && typeof newCtx.headers === 'object') {
                for (const k in newCtx.headers) xhr._headersSetMap[k] = newCtx.headers[k];
            }
            // 覆盖 body
            if (typeof newCtx.json === 'string') { data = newCtx.json; xhr._headersSetMap['Content-Type'] = newCtx.contentType || 'application/json'; }
            else if (typeof newCtx.form === 'string') { data = newCtx.form; xhr._headersSetMap['Content-Type'] = newCtx.contentType || 'application/x-www-form-urlencoded'; }
            // 统一实际设置 headers
            try { const map = xhr._headersSetMap || {}; for (const k in map) { _origSetHeader.call(xhr, k, map[k]); } } catch{}
        } catch(e){ warn('【前置】执行失败', e); }

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
                            parsedData = { contentType: xhr.getResponseHeader('content-type') || '', parsedBody: null, size: xhr._monitorCL || 0 };
                        } else {
                            parsedData = parseResponseBody({ headers: { get: (name) => xhr.getResponseHeader(name) } }, xhr.responseText);
                        }
                        // 收集响应 headers
                        const respHeaders = {}; try { const rawHeaders = xhr.getAllResponseHeaders(); if (rawHeaders) { rawHeaders.trim().split(/\r?\n/).forEach(line=>{ const idx=line.indexOf(':'); if (idx>0){ const k=line.slice(0,idx).trim(); const v=line.slice(idx+1).trim(); respHeaders[k]=v; } }); } } catch{}
                        const warnings = await checkResponseContent(parsedData, { status: xhr.status, durationMs, headers: respHeaders });
                        if (warnings.length > 0) {
                            const message = (warnings || []).map(w => String(w)).join('\n');
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
                } catch (e) {
                    error('XHR Hook Error:', e);
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

        // 添加样式（注入到 ShadowRoot，避免外部样式干扰）
        const MODAL_CSS = `
            :host {
                --surface: rgba(255,255,255,0.85);
                --surface-2: rgba(255,255,255,0.6);
                --primary: #7c3aed;          /* violet */
                --primary-2: #06b6d4;        /* cyan */
                --accent: #f59e0b;           /* amber */
                --success: #22c55e;          /* green */
                --danger: #ef4444;           /* red */
                --muted: #6b7280;            /* gray-500 */
                --border: rgba(124,58,237,0.25);
                --ring: rgba(124,58,237,0.25);

                /* Button design tokens */
                --btn-radius: 12px;
                --btn-font-size: 12px;
                --btn-padding-y: 8px;
                --btn-padding-x: 12px;
                --btn-border: rgba(15,23,42,0.10);
                --btn-shadow: 0 8px 18px rgba(15,23,42,0.10);
                --btn-shadow-hover: 0 12px 24px rgba(15,23,42,0.14);
                --btn-shadow-active: 0 6px 16px rgba(15,23,42,0.12);
                --btn-base-from: rgba(255,255,255,0.85);
                --btn-base-to: rgba(255,255,255,0.5);
                --btn-hover-from: rgba(124,58,237,0.10);
                --btn-hover-to: rgba(6,182,212,0.10);
                --btn-hover-border: rgba(124,58,237,0.35);

                /* Button variant tokens */
                --btn-save-from: #6366f1;
                --btn-save-to: #06b6d4;
                --btn-save-border: rgba(124,58,237,0.45);

                --btn-reset-from: #f59e0b;
                --btn-reset-to: #fb923c;
                --btn-reset-border: rgba(245,158,11,0.45);

                --btn-clear-from: #64748b;
                --btn-clear-to: #334155;
                --btn-clear-border: rgba(100,116,139,0.45);

                --btn-cancel-from: #ef4444;
                --btn-cancel-to: #f43f5e;
                --btn-cancel-border: rgba(244,63,94,0.45);
            }
            /* Overlay with subtle vignette */
            .http-monitor-config-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background:
                    radial-gradient(1200px 700px at 10% -10%, rgba(6,182,212,0.25), transparent 55%),
                    radial-gradient(1200px 700px at 90% 110%, rgba(245,158,11,0.22), transparent 55%),
                    rgba(10,12,15,0.55);
                backdrop-filter: blur(6px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000000;
            }
            /* Card with glass + gradient ring */
            .http-monitor-config-content {
                position: relative;
                background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(247,250,255,0.85) 100%);
                border-radius: 16px;
                padding: 0;
                max-width: 960px;
                max-height: 80vh;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-sizing: border-box;
                box-shadow:
                    0 10px 30px rgba(20,24,40,0.22),
                    0 1px 0 rgba(255,255,255,0.6) inset;
            }
            .http-monitor-config-content::before {
                content: '';
                position: absolute;
                inset: 0;
                padding: 1px;
                border-radius: 16px;
                background: linear-gradient(120deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5), rgba(245,158,11,0.5));
                -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
            }
            .http-monitor-config-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                border-bottom: 1px solid rgba(15,23,42,0.06);
                padding: 18px 22px 12px;
                margin: 0;
                background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.35));
                backdrop-filter: blur(6px);
            }
            .http-monitor-config-title {
                margin: 0;
                font-size: 20px;
                font-weight: 800;
                letter-spacing: -0.2px;
                background: linear-gradient(90deg, #7c3aed 0%, #06b6d4 50%, #f59e0b 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
            .http-monitor-config-close {
                background: transparent;
                border: none;
                font-size: 22px;
                line-height: 1;
                cursor: pointer;
                color: #334155;
                border-radius: 8px;
                padding: 4px 8px;
            }
            .http-monitor-config-close:hover { background: rgba(15,23,42,0.06); }
            .http-monitor-config-body {
                flex: 1 1 auto;
                overflow-y: auto;
                padding: 20px;
                width: 100%;
                max-width: 820px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 16px;
                box-sizing: border-box;
            }
            .http-monitor-config-buttons {
                width: 100%;
                max-width: 820px;
                margin: 0 auto;
                border-top: 1px solid rgba(15,23,42,0.06);
                display: flex;
                gap: 12px;
                justify-content: flex-end;
                padding: 12px 20px 18px;
                background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.2));
                backdrop-filter: blur(6px);
                box-sizing: border-box;
            }
            /* Groups / Cards */
            .http-monitor-config-group {
                background: var(--surface);
                border: 1px solid rgba(15,23,42,0.06);
                border-radius: 14px;
                padding: 14px;
                box-shadow: 0 8px 24px rgba(15,23,42,0.08);
                transition: transform .16s ease, box-shadow .16s ease;
            }

            .http-monitor-config-textarea {
                height: 200px;
                width: 100%;
                max-width: 100%;
                display: block;
                box-sizing: border-box;
                background: var(--surface-2);
                border: 1px solid rgba(15,23,42,0.08);
                border-radius: 10px;
                padding: 8px 10px;
                font-size: 14px;
                color: #0f172a;
                outline: none;
                transition: box-shadow .15s ease, border-color .15s ease, background .15s ease;
                resize: vertical;
            }

            .http-monitor-config-group:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(15,23,42,0.12); }
            .http-monitor-config-label { font-weight: 700; color: #0f172a; margin-bottom: 8px; display: block; }
            .http-monitor-config-input,
            select.plugin-exec-mode,
            input.plugin-timeout {
                width: 100%;
                max-width: 100%;
                display: block;
                box-sizing: border-box;
                background: var(--surface-2);
                border: 1px solid rgba(15,23,42,0.08);
                border-radius: 10px;
                padding: 8px 10px;
                font-size: 14px;
                color: #0f172a;
                outline: none;
                transition: box-shadow .15s ease, border-color .15s ease, background .15s ease;
                resize: vertical;
            }
            .http-monitor-config-input:focus,
            .http-monitor-config-textarea:focus,
            select.plugin-exec-mode:focus,
            input.plugin-timeout:focus {
                border-color: var(--border);
                box-shadow: 0 0 0 4px var(--ring);
                background: rgba(255,255,255,0.95);
            }
            .http-monitor-config-checkbox { accent-color: var(--primary); }
            /* Method chips */
            .http-monitor-config-method-list { display: flex; flex-wrap: wrap; gap: 10px; }
            .http-monitor-config-method-item {
                display: flex; align-items: center; gap: 8px;
                padding: 6px 10px;
                border-radius: 999px;
                background: linear-gradient(180deg, rgba(124,58,237,0.08), rgba(6,182,212,0.08));
                border: 1px solid rgba(124,58,237,0.15);
            }
            /* Buttons */
            /* Button base (shared by toolbar + config buttons) */
            .plugin-toolbar button,
            .http-monitor-config-buttons button {
                appearance: none;
                border: 1px solid var(--btn-border);
                color: #0f172a;
                padding: var(--btn-padding-y) var(--btn-padding-x);
                border-radius: var(--btn-radius);
                font-size: var(--btn-font-size);
                font-weight: 700;
                letter-spacing: 0.2px;
                cursor: pointer;
                background: linear-gradient(180deg, var(--btn-base-from), var(--btn-base-to));
                box-shadow: var(--btn-shadow);
                transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease, color .12s ease, filter .12s ease;
                backdrop-filter: blur(6px);
                outline: none;
            }
            .plugin-toolbar button:hover,
            .http-monitor-config-buttons button:hover {
                background: linear-gradient(180deg, var(--btn-hover-from), var(--btn-hover-to));
                border-color: var(--btn-hover-border);
                transform: translateY(-1px);
                box-shadow: var(--btn-shadow-hover);
                color: #111827;
                filter: brightness(1.02);
            }
            .plugin-toolbar button:active,
            .http-monitor-config-buttons button:active {
                transform: translateY(0);
                box-shadow: var(--btn-shadow-active);
                filter: brightness(0.99);
            }
            .plugin-toolbar button:focus-visible,
            .http-monitor-config-buttons button:focus-visible {
                box-shadow: 0 0 0 4px var(--ring, rgba(124,58,237,0.2)), 0 8px 18px rgba(15,23,42,0.10);
                border-color: rgba(124,58,237,0.45);
            }
            /* Variants */
            .http-monitor-config-btn-save {
                color: #fff !important;
                border-color: var(--btn-save-border) !important;
                background: linear-gradient(135deg, var(--btn-save-from), var(--btn-save-to)) !important;
            }
            .http-monitor-config-btn-save:hover { filter: brightness(1.03); }
            .http-monitor-config-btn-reset {
                color: #fff !important;
                border-color: var(--btn-reset-border) !important;
                background: linear-gradient(135deg, var(--btn-reset-from), var(--btn-reset-to)) !important;
            }
            .http-monitor-config-btn-reset:hover { filter: brightness(1.03); }
            .http-monitor-config-btn-clear {
                color: #fff !important;
                border-color: var(--btn-clear-border) !important;
                background: linear-gradient(135deg, var(--btn-clear-from), var(--btn-clear-to)) !important;
            }
            .http-monitor-config-btn-clear:hover { filter: brightness(1.03); }
            .http-monitor-config-btn-cancel {
                color: #fff !important;
                border-color: var(--btn-cancel-border) !important;
                background: linear-gradient(135deg, var(--btn-cancel-from), var(--btn-cancel-to)) !important;
            }
            .http-monitor-config-btn-cancel:hover { filter: brightness(1.03); }
            /* Plugin three-row layout */
            .plugin-item {
                position: relative;
                background: var(--surface);
                border-radius: 12px;
                padding: 12px;
                margin-bottom: 12px;
                display: grid;
                grid-template-rows: auto auto auto;
                row-gap: 10px;
                box-shadow: 0 6px 18px rgba(15,23,42,0.1);
            }
            .plugin-item::before {
                content: '';
                position: absolute;
                inset: 0;
                padding: 1px;
                border-radius: 12px;
                background: linear-gradient(120deg, rgba(124,58,237,0.4), rgba(6,182,212,0.4));
                -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
            }
            /* Robust header layout to avoid wrapping disorder */
            .plugin-header { display: grid; grid-template-columns: minmax(220px,1fr) auto; align-items: center; gap: 10px; margin: 0; }
            .plugin-name { min-width: 200px; }
            .plugin-header > label { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin: 0; }
            .plugin-header label { margin: 0; white-space: nowrap; }
            .plugin-header .plugin-name { width: 100%; min-width: 0; }
            /* Narrower select for execution mode */
            select.plugin-exec-mode { width: auto; min-width: 96px; max-width: 160px; padding: 6px 8px; box-sizing: border-box; font-size: 12px; }
            .plugin-header input.plugin-timeout { min-width: 120px; width: 140px; }
            @media (max-width: 640px) {
                .plugin-header { grid-template-columns: 1fr; }
                .plugin-header > label { justify-content: flex-start; }
            }
            .plugin-toolbar { display: flex; gap: 10px; justify-content: flex-start; margin: 0; }
            .plugin-toolbar .remove-plugin-btn { border-color: rgba(239,68,68,0.35); }
            .plugin-toolbar .remove-plugin-btn:hover { background: linear-gradient(180deg, rgba(239,68,68,0.12), rgba(244,63,94,0.12)); border-color: rgba(239,68,68,0.5); }
            /* URL pattern list (scoped to URL patterns only) */
            #config-urlPatterns { margin-top: 6px; }
            #config-urlPatterns .http-monitor-config-url-pattern { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
            #config-urlPatterns .http-monitor-config-url-pattern .http-monitor-config-input { flex: 1 1 auto; }
            /* Remove pattern button */
            .remove-pattern-btn {
                appearance: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                min-width: 28px;
                padding: 0;
                border-radius: 8px;
                border: 1px solid rgba(239,68,68,0.28);
                background: linear-gradient(180deg, rgba(239,68,68,0.06), rgba(244,63,94,0.06));
                color: #ef4444;
                cursor: pointer;
                transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease, color .12s ease;
            }
            .remove-pattern-btn:hover {
                background: linear-gradient(180deg, rgba(239,68,68,0.12), rgba(244,63,94,0.12));
                border-color: rgba(239,68,68,0.45);
                color: #dc2626;
                transform: translateY(-1px);
                box-shadow: 0 6px 14px rgba(239,68,68,0.18);
            }
            .remove-pattern-btn:active { transform: translateY(0); box-shadow: 0 2px 6px rgba(239,68,68,0.16); }
            .remove-pattern-btn:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(239,68,68,0.15); }
            .plugin-code-wrapper { position: relative; margin-top: 0; }
            .plugin-code-overlay { pointer-events: none; white-space: pre; background: #f8fafc; color: #111827; border: 1px solid rgba(15,23,42,0.08); border-radius: 8px; }
            /* Fullscreen layer (avoid flicker by reparenting) */
            .plugin-code-fullscreen-layer { position: fixed; inset: 0; z-index: 1000002; display: none; background: rgba(0,0,0,0.4); }
            .plugin-code-fullscreen-layer.active { display: block; }
            .plugin-code-fullscreen-layer .plugin-code-wrapper { position: absolute; inset: 20px; background: #fff; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.25); padding: 12px; overflow: hidden; }
            .plugin-code-fullscreen-layer .plugin-code-overlay { display: none; }
            .plugin-code-fullscreen-layer .plugin-code { position: absolute; inset: 12px; width: calc(100% - 24px); height: calc(100% - 24px); color: #111; background: #fff; }
            .plugin-fullscreen-btn, .plugin-format-btn { background: #6366f1; color: #fff; border: none; padding: 6px 10px; border-radius: 8px; cursor: pointer; font-size: 12px; }
            .plugin-fullscreen-btn:hover, .plugin-format-btn:hover { background: #4f46e5; }

            /* Lightweight syntax highlight (scoped to modal) */
            .hl-kw { color: #d73a49; font-weight: bold; }
            .hl-str { color: #032f62; }
            .hl-cmt { color: #6a737d; font-style: italic; }
            .hl-num { color: #005cc5; }
            .hl-builtin { color: #6f42c1; }
            .hl-css-prop { color: #005cc5; }
            .hl-css-val { color: #22863a; }
            .hl-css-at { color: #6f42c1; font-weight: bold; }
            .hl-css-sel { color: #e36209; }
            /* Scrollbar aesthetics */
            .http-monitor-config-body::-webkit-scrollbar { width: 10px; }
            .http-monitor-config-body::-webkit-scrollbar-thumb { background: linear-gradient(#7c3aed, #06b6d4); border-radius: 999px; }
            .http-monitor-config-body::-webkit-scrollbar-track { background: rgba(15,23,42,0.05); border-radius: 999px; }
        `;

        const shadowStyle = injectStyles(shadowRoot, MODAL_CSS);

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
                    <label class="http-monitor-config-label">仅用元信息判定（跳过深度分析）</label>
                    <label class="http-monitor-config-label"><input type="checkbox" class="http-monitor-config-checkbox" id="config-metaOnly" ${CONFIG.metaOnly ? 'checked' : ''}> 启用</label>
                    <div style="font-size:12px;color:#666;margin-top:6px;">避免worker内存消耗过大</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">Worker 空闲回收（秒）</label>
                    <input type="number" class="http-monitor-config-input" id="config-workerIdleSeconds" value="${CONFIG.workerIdleSeconds || 15}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">复用 Worker 空闲多少秒后自动释放</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">Worker 最大并发</label>
                    <input type="number" class="http-monitor-config-input" id="config-workerMaxConcurrency" value="${CONFIG.workerMaxConcurrency || 1}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">同时可运行的最多worker数量，超过该值任务就会排队等待</div>
                </div>

                

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">每次执行最大告警条数</label>
                    <input type="number" class="http-monitor-config-input" id="config-maxWarningsPerRun" value="${CONFIG.maxWarningsPerRun || 50}">
                    <div style="font-size:12px;color:#666;margin-top:6px;">Worker 端按该值截断返回，防止大结果占用</div>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">启用轻量指标日志（控制台）</label>
                    <label class="http-monitor-config-label"><input type="checkbox" class="http-monitor-config-checkbox" id="config-metrics" ${CONFIG.metrics ? 'checked' : ''}> 启用</label>
                    <div style="font-size:12px;color:#666;margin-top:6px;">metrics 打开后，会输出简单耗时日志（内置/自定义插件执行、复用 worker run 耗时和传输字节）。</div>
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
                        ${['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'].map(method =>
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
                        ${(Array.isArray(CONFIG.urlPatternsRaw) ? CONFIG.urlPatternsRaw : CONFIG.urlPatterns.map(p => p.toString())).map((raw, index) =>
            `<div class="http-monitor-config-url-pattern">
                                <input type="text" class="http-monitor-config-input" value="${String(raw).replace(/\"/g, '&quot;')}"
                                       placeholder="例如: /api/.* 或 .*">
                                <button class="remove-pattern-btn" type="button" aria-label="删除此规则" title="删除">&times;</button>
                            </div>`
        ).join('')}
                    </div>
                    <button id="add-pattern-btn" style="margin-top: 12px; padding: 10px 16px; background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; box-shadow: 0 2px 6px rgba(33, 150, 243, 0.3); transition: all 0.2s ease;">添加API Path Pattern</button>
                </div>

                <div class="http-monitor-config-group">
                    <label class="http-monitor-config-label">内置插件</label>
                    <div class="http-monitor-config-url-patterns">
                        ${[{ key: 'httpCode', title: 'HTTP状态码检查' }, { key: 'sizeLimit', title: '响应体大小检查' }, { key: 'durationLimit', title: '请求耗时检查' }].map(p => `
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
                    <div class="http-monitor-config-group">
                        <div class="http-monitor-config-label"><b>【前置】插件（请求前执行）</b></div>
                        <div id="pre-plugins" class="plugin-list">
                            ${(CONFIG.prePluginsMeta || []).map((meta, index) => `
                                <div class=\"http-monitor-config-url-pattern plugin-item\" data-index=\"${index}\">\n\
                                    <div class=\"plugin-header\"> \n\
                                        <input type=\"text\" class=\"http-monitor-config-input plugin-name\" value=\"${(meta.name || '').replace(/\\"/g, '&quot;')}\" placeholder=\"插件名称（唯一）\"> \n\
                                        <label><input type=\"checkbox\" class=\"plugin-enabled\" ${meta.enabled !== false ? 'checked' : ''}><b>启用</b></label>\n\
                                    </div>\n\
                                    <div class=\"plugin-header\">\n\
                                        <label style=\"width:100%; height:100%;\">\n\
                                            <label><b>执行模式:</b></label>\n\
                                            <select class=\"plugin-exec-mode\"> \n\
                                            <option value=\"inherit\" ${meta.executionMode === 'inherit' || !meta.executionMode ? 'selected' : ''}>继承</option>\n\
                                            <option value=\"reuse\" ${meta.executionMode === 'reuse' ? 'selected' : ''}>重用Worker</option>\n\
                                            <option value=\"spawn\" ${meta.executionMode === 'spawn' ? 'selected' : ''}>重建Worker</option>\n\
                                            </select>\n\
                                            <label><b>超时(ms):</b></label>\n\
                                            <input type=\"number\" class=\"plugin-timeout\" value=\"${typeof meta.timeoutMs === 'number' ? meta.timeoutMs : ''}\" placeholder=\"继承全局\">\n\
                                        </label>\n\
                                    </div>\n\
                                    ${renderPluginToolbarHTML()}\n\
                                    ${renderPrePluginCodeEditorHTML((CONFIG.prePluginsSource && CONFIG.prePluginsSource[index]) || '')}\n\
                                </div>
                            `).join('')}
                        </div>
                        <div id="pre-plugins-action-bar" class="plugin-toolbar" style="margin-top:8px;">
                            <button id="add-pre-plugin-btn" class="http-monitor-config-btn-reset">添加插件</button>
                            <button id="export-pre-plugins-btn" class="http-monitor-config-btn-reset">导出插件JSON</button>
                            <button id="import-pre-plugins-btn" class="http-monitor-config-btn-reset">导入插件JSON</button>
                            <input type="file" id="import-pre-plugins-file" accept="application/json" style="display:none;" />
                        </div>
                        <div style=\"font-size:12px;color:#666;margin-top:6px;\">上下文: { query, form, json, contentType, headers }</div>
                    </div>
                    <div class="http-monitor-config-group">
                        <div class="http-monitor-config-label"><b>【后置】插件（请求后执行）</b></div>
                        <div id="config-plugins" class="plugin-list">
                            ${(CONFIG.pluginsMeta || []).map((meta, index) => `
                                <div class=\"http-monitor-config-url-pattern plugin-item\" data-index=\"${index}\">\n\
                                    <div class=\"plugin-header\"> \n\
                                        <input type=\"text\" class=\"http-monitor-config-input plugin-name\" value=\"${(meta.name || '').replace(/\\"/g, '&quot;')}\" placeholder=\"插件名称（唯一）\"> \n\
                                        <label><input type=\"checkbox\" class=\"plugin-enabled\" ${meta.enabled !== false ? 'checked' : ''}><b>启用</b></label>\n\
                                    </div>\n\
                                    <div class=\"plugin-header\">\n\
                                        <label style=\"width:100%; height:100%;\">\n\
                                            <label><b>执行模式:</b></label>\n\
                                            <select class=\"plugin-exec-mode\"> \n\
                                            <option value=\"inherit\" ${meta.executionMode === 'inherit' || !meta.executionMode ? 'selected' : ''}>继承</option>\n\
                                            <option value=\"reuse\" ${meta.executionMode === 'reuse' ? 'selected' : ''}>重用Worker</option>\n\
                                            <option value=\"spawn\" ${meta.executionMode === 'spawn' ? 'selected' : ''}>重建Worker</option>\n\
                                            </select>\n\
                                            <label><b>超时(ms):</b></label>\n\
                                            <input type=\"number\" class=\"plugin-timeout\" value=\"${typeof meta.timeoutMs === 'number' ? meta.timeoutMs : ''}\" placeholder=\"继承全局\">\n\
                                        </label>\n\
                                    </div>\n\
                                    ${renderPluginToolbarHTML()}\n\
                                    ${renderPluginCodeEditorHTML((CONFIG.pluginsSource && CONFIG.pluginsSource[index]) || '')}\n\
                                `).join('')}
                        </div>
                        <div id="plugins-action-bar" class="plugin-toolbar" style="margin-top:8px;">
                            <button id="add-plugin-btn" class="http-monitor-config-btn-reset">添加插件</button>
                            <button id="export-plugins-btn" class="http-monitor-config-btn-reset">导出插件JSON</button>
                            <button id="import-plugins-btn" class="http-monitor-config-btn-reset">导入插件JSON</button>
                            <input type="file" id="import-plugins-file" accept="application/json" style="display:none;" />
                        </div>
                        <div style=\"font-size:12px;color:#666;margin-top:6px;\">上下文: { httpStatus, durationMs, sizeBytes, body, contentType, headers }；将告警文本 push 到 warnings。</div> 
                    </div>
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
        shadowRoot.appendChild(shadowStyle);
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
            <button class="remove-pattern-btn" type="button" aria-label="删除此规则" title="删除">&times;</button>
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
            const metaOnlyCheckbox = shadowRoot.querySelector('#config-metaOnly');
            const workerIdleSecondsInput = shadowRoot.querySelector('#config-workerIdleSeconds');
            const workerMaxConcurrencyInput = shadowRoot.querySelector('#config-workerMaxConcurrency');
            
            const maxWarningsPerRunInput = shadowRoot.querySelector('#config-maxWarningsPerRun');
            const metricsCheckbox = shadowRoot.querySelector('#config-metrics');

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
            CONFIG.metaOnly = metaOnlyCheckbox ? !!metaOnlyCheckbox.checked : CONFIG.metaOnly;
            CONFIG.workerIdleSeconds = workerIdleSecondsInput ? Math.max(1, parseInt(workerIdleSecondsInput.value) || 15) : CONFIG.workerIdleSeconds;
            CONFIG.workerMaxConcurrency = workerMaxConcurrencyInput ? Math.max(1, parseInt(workerMaxConcurrencyInput.value) || 1) : CONFIG.workerMaxConcurrency;
            
            CONFIG.maxWarningsPerRun = maxWarningsPerRunInput ? Math.max(1, parseInt(maxWarningsPerRunInput.value) || 50) : CONFIG.maxWarningsPerRun;
            CONFIG.metrics = metricsCheckbox ? !!metricsCheckbox.checked : CONFIG.metrics;

            // 更新HTTP方法
            CONFIG.methods = [];
            ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'].forEach(method => {
                const checkbox = shadowRoot.querySelector(`#method-${method}`);
                if (checkbox && checkbox.checked) {
                    CONFIG.methods.push(method);
                }
            });

            // 更新URL模式（支持 /body/flags 形式）；全部校验通过才写入
            const newPatterns = [];
            const patternInputs = shadowRoot.querySelectorAll('#config-urlPatterns input[type="text"]');
        const rawValues = [];
            for (const input of patternInputs) {
                const value = (input.value || '').trim();
                if (!value) return;
            rawValues.push(value);
                // 优先按 /.../flags 解析
                const revived = revivePattern(value);
                if (revived instanceof RegExp) {
                    newPatterns.push(revived);
                    continue;
                }
                // 其次尝试直接作为正则主体
                try {
                    newPatterns.push(new RegExp(value));
                } catch (e) {
                    alert('无效的正则表达式: ' + value);
                    throw e;
                }
            }
            // 全部通过校验后再落盘
            CONFIG.urlPatterns = newPatterns;
        CONFIG.urlPatternsRaw = rawValues;
            ensureUrlPatterns();

            // 名称冲突可视标记
            const hasConflict = validatePluginNames(shadowRoot);
            if (hasConflict) {
                alert('存在重复的插件名称，请修正红框标记项');
                throw new Error('插件名称重复');
            }

            // 更新【后置】自定义插件列表（名称唯一、启用、源码）
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

            // 更新【前置】插件列表
            CONFIG.prePluginsSource = [];
            CONFIG.prePlugins = [];
            CONFIG.prePluginsMeta = [];
            const preNodes = shadowRoot.querySelectorAll('#pre-plugins .plugin-item');
            const usedPre = new Set();
            preNodes.forEach((node, idx) => {
                const nameInput = node.querySelector('.plugin-name');
                const enableInput = node.querySelector('.plugin-enabled');
                const execModeSel = node.querySelector('.plugin-exec-mode');
                const timeoutInput = node.querySelector('.plugin-timeout');
                const codeArea = node.querySelector('.plugin-code');
                const name = (nameInput && nameInput.value.trim()) || '';
                if (!name) return;
                if (usedPre.has(name)) return;
                usedPre.add(name);
                const src = (codeArea && codeArea.value.trim()) || '';
                CONFIG.prePluginsSource.push(src);
                const executionMode = execModeSel ? (execModeSel.value || 'inherit') : 'inherit';
                const timeoutMs = timeoutInput && timeoutInput.value ? Math.max(1000, parseInt(timeoutInput.value)) : undefined;
                const metaObj = { name, enabled: enableInput ? enableInput.checked : true, executionMode };
                if (typeof timeoutMs === 'number' && !Number.isNaN(timeoutMs)) metaObj.timeoutMs = timeoutMs;
                CONFIG.prePluginsMeta.push(metaObj);
                const fn = compilePrePluginFromSource(src);
                if (typeof fn === 'function') CONFIG.prePlugins.push(fn);
            });

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
            // 显示成功消息
            successToast('配置已保存');
            info('配置已更新:', CONFIG);
        } catch (e) {
            error('保存配置失败:', e);
            showAlert('保存配置失败: ' + e.message, null);
        }
    }

    // 显示配置弹窗
    function showConfigModal() {
        // 首先检查是否已经存在modal容器
        let modalContainer = document.querySelector('div[http-monitor-config]');



        if (!modalContainer) {
            modalContainer = createConfigModal();
        } else {
            // 模态框已存在，确保重新绑定事件，避免控件丢失
            bindModalEvents(modalContainer);
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
            // 确保插件工具控件存在且绑定
            if (typeof ensurePluginControls === 'function') {
                try { ensurePluginControls(shadowRoot); } catch(e) { error('ensurePluginControls error', e); }
            }
        }
    }

    // 确保"添加/导出/导入插件"控件存在且事件绑定为最新（幂等）
    function ensurePluginControls(shadowRoot) {
        if (!shadowRoot) return;
        // 后置插件工具条（严格限定在专属容器内，避免落入全局按钮区）
        const postBar = shadowRoot.querySelector('#plugins-action-bar');
        if (postBar) {
            // 添加插件
            let addBtn = shadowRoot.querySelector('#add-plugin-btn');
            if (!addBtn) {
                addBtn = document.createElement('button');
                addBtn.id = 'add-plugin-btn';
                addBtn.className = 'http-monitor-config-btn-reset';
                addBtn.textContent = '添加插件';
                postBar.appendChild(addBtn);
            } else if (addBtn.parentElement !== postBar) {
                postBar.appendChild(addBtn);
            }
            if (addBtn) {
                addBtn.replaceWith(addBtn.cloneNode(true));
                addBtn = shadowRoot.querySelector('#add-plugin-btn');
                addBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    const container = shadowRoot.querySelector('#config-plugins');
                    if (!container) return;
                    const wrapper = document.createElement('div');
                    wrapper.className = 'http-monitor-config-url-pattern plugin-item';
                    wrapper.innerHTML = `
                        <div class="plugin-header"> 
                            <input type="text" class="http-monitor-config-input plugin-name" value="" placeholder="插件名称（唯一）"> 
                            <label><input type="checkbox" class="plugin-enabled" checked><b>启用</b></label>
                        <div/>
                        <div class="plugin-header"> 
                            <label>
                                <label><b>执行模式:</b></label>
                                <select class="plugin-exec-mode"> 
                                    <option value="inherit" selected>继承</option>
                                    <option value="reuse">重用Worker</option>
                                    <option value="spawn">重建Worker</option>
                                </select>
                                <label><b>超时(ms):</b></label>
                                <input type="number" class="plugin-timeout" placeholder="继承全局">
                            </label>
                        </div>
                        ${renderPluginToolbarHTML()}
                        ${renderPrePluginCodeEditorHTML('')}
                    `;
                    const removeBtn = wrapper.querySelector('.remove-plugin-btn');
                    if (removeBtn) {
                        removeBtn.addEventListener('click', (ev) => {
                            ev.preventDefault(); ev.stopPropagation();
                            wrapper.remove();
                            validatePluginNames(shadowRoot);
                        });
                    }
                    container.appendChild(wrapper);
                    attachPluginEditorBehavior(shadowRoot, wrapper);
                    validatePluginNames(shadowRoot);
                });
            }

            // 导出插件
            let exportBtn = shadowRoot.querySelector('#export-plugins-btn');
            if (!exportBtn) {
                exportBtn = document.createElement('button');
                exportBtn.id = 'export-plugins-btn';
                exportBtn.className = 'http-monitor-config-btn-reset';
                exportBtn.textContent = '导出插件JSON';
                postBar.appendChild(exportBtn);
            } else if (exportBtn.parentElement !== postBar) {
                postBar.appendChild(exportBtn);
            }
            if (exportBtn) {
                exportBtn.replaceWith(exportBtn.cloneNode(true));
                exportBtn = shadowRoot.querySelector('#export-plugins-btn');
                exportBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    const data = { pluginsMeta: CONFIG.pluginsMeta || [], pluginsSource: CONFIG.pluginsSource || [] };
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url; a.download = 'http-monitor-plugins.json';
                    document.body.appendChild(a); a.click(); a.remove();
                    URL.revokeObjectURL(url);
                });
            }

            // 导入插件
            let importBtn = shadowRoot.querySelector('#import-plugins-btn');
            let importFile = shadowRoot.querySelector('#import-plugins-file');
            if (!importBtn) {
                importBtn = document.createElement('button');
                importBtn.id = 'import-plugins-btn';
                importBtn.className = 'http-monitor-config-btn-reset';
                importBtn.textContent = '导入插件JSON';
                postBar.appendChild(importBtn);
            } else if (importBtn.parentElement !== postBar) {
                postBar.appendChild(importBtn);
            }
            if (!importFile) {
                importFile = document.createElement('input');
                importFile.type = 'file';
                importFile.accept = 'application/json';
                importFile.style.display = 'none';
                importFile.id = 'import-plugins-file';
                postBar.appendChild(importFile);
            } else if (importFile.parentElement !== postBar) {
                postBar.appendChild(importFile);
            }
            if (importBtn && importFile) {
                importBtn.replaceWith(importBtn.cloneNode(true));
                importBtn = shadowRoot.querySelector('#import-plugins-btn');
                importBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    importFile.value = '';
                    importFile.click();
                });
                importFile.replaceWith(importFile.cloneNode(true));
                importFile = shadowRoot.querySelector('#import-plugins-file');
                importFile.addEventListener('change', async () => {
                    const file = importFile.files && importFile.files[0];
                    if (!file) return;
                    try {
                        const text = await file.text();
                        const json = JSON.parse(text);
                        const sources = Array.isArray(json.pluginsSource) ? json.pluginsSource : [];
                        let meta = Array.isArray(json.pluginsMeta) ? json.pluginsMeta : [];
                        if (meta.length !== sources.length) {
                            meta = sources.map((_, i) => ({ name: `plugin_${i + 1}`, enabled: true }));
                        }
                        CONFIG.pluginsSource = sources;
                        CONFIG.pluginsMeta = meta;
                        CONFIG.plugins = [];
                        sources.forEach(src => { const fn = compilePluginFromSource(src); if (typeof fn === 'function') CONFIG.plugins.push(fn); });
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

        // 【前置】插件工具条（同样限定在自身容器）
        const preBar = shadowRoot.querySelector('#pre-plugins-action-bar');
        if (preBar) {
            let addPreBtn = shadowRoot.querySelector('#add-pre-plugin-btn');
            if (!addPreBtn) {
                addPreBtn = document.createElement('button');
                addPreBtn.id = 'add-pre-plugin-btn';
                addPreBtn.className = 'http-monitor-config-btn-reset';
                addPreBtn.textContent = '添加插件';
                preBar.appendChild(addPreBtn);
            } else if (addPreBtn.parentElement !== preBar) {
                preBar.appendChild(addPreBtn);
            }
            if (addPreBtn) {
                addPreBtn.replaceWith(addPreBtn.cloneNode(true));
                addPreBtn = shadowRoot.querySelector('#add-pre-plugin-btn');
                addPreBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    const preContainer = shadowRoot.querySelector('#pre-plugins');
                    if (!preContainer) return;
                    const wrapper = document.createElement('div');
                    wrapper.className = 'http-monitor-config-url-pattern plugin-item';
                    wrapper.innerHTML = renderPluginItemHTML({ name: '', enabled: true, executionMode: 'inherit' }, 0, '', true);
                    preContainer.appendChild(wrapper);
                    attachPluginEditorBehavior(shadowRoot, wrapper);
                    validatePluginNames(shadowRoot);
                });
            }

            let exportPreBtn = shadowRoot.querySelector('#export-pre-plugins-btn');
            if (!exportPreBtn) {
                exportPreBtn = document.createElement('button');
                exportPreBtn.id = 'export-pre-plugins-btn';
                exportPreBtn.className = 'http-monitor-config-btn-reset';
                exportPreBtn.textContent = '导出插件JSON';
                preBar.appendChild(exportPreBtn);
            } else if (exportPreBtn.parentElement !== preBar) {
                preBar.appendChild(exportPreBtn);
            }
            if (exportPreBtn) {
                exportPreBtn.replaceWith(exportPreBtn.cloneNode(true));
                exportPreBtn = shadowRoot.querySelector('#export-pre-plugins-btn');
                exportPreBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    const data = { prePluginsMeta: CONFIG.prePluginsMeta || [], prePluginsSource: CONFIG.prePluginsSource || [] };
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url; a.download = 'http-monitor-pre-plugins.json';
                    document.body.appendChild(a); a.click(); a.remove();
                    URL.revokeObjectURL(url);
                });
            }

            let importPreBtn = shadowRoot.querySelector('#import-pre-plugins-btn');
            let importPreFile = shadowRoot.querySelector('#import-pre-plugins-file');
            if (!importPreBtn) {
                importPreBtn = document.createElement('button');
                importPreBtn.id = 'import-pre-plugins-btn';
                importPreBtn.className = 'http-monitor-config-btn-reset';
                importPreBtn.textContent = '导入插件JSON';
                preBar.appendChild(importPreBtn);
            } else if (importPreBtn.parentElement !== preBar) {
                preBar.appendChild(importPreBtn);
            }
            if (!importPreFile) {
                importPreFile = document.createElement('input');
                importPreFile.type = 'file';
                importPreFile.accept = 'application/json';
                importPreFile.style.display = 'none';
                importPreFile.id = 'import-pre-plugins-file';
                preBar.appendChild(importPreFile);
            } else if (importPreFile.parentElement !== preBar) {
                preBar.appendChild(importPreFile);
            }
            if (importPreBtn && importPreFile) {
                importPreBtn.replaceWith(importPreBtn.cloneNode(true));
                importPreBtn = shadowRoot.querySelector('#import-pre-plugins-btn');
                importPreBtn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    importPreFile.value = '';
                    importPreFile.click();
                });
                importPreFile.replaceWith(importPreFile.cloneNode(true));
                importPreFile = shadowRoot.querySelector('#import-pre-plugins-file');
                importPreFile.addEventListener('change', async () => {
                    const file = importPreFile.files && importPreFile.files[0];
                    if (!file) return;
                    try {
                        const text = await file.text();
                        const json = JSON.parse(text);
                        const sources = Array.isArray(json.prePluginsSource) ? json.prePluginsSource : [];
                        let meta = Array.isArray(json.prePluginsMeta) ? json.prePluginsMeta : [];
                        if (meta.length !== sources.length) meta = sources.map((_, i)=>({ name: `【前置】plugin_${i+1}`, enabled: true }));
                        CONFIG.prePluginsSource = sources; CONFIG.prePluginsMeta = meta;
                        CONFIG.prePlugins = []; sources.forEach(src=>{ const fn=compilePrePluginFromSource(src); if (typeof fn==='function') CONFIG.prePlugins.push(fn); });
                        saveConfig();
                        const preList = shadowRoot.querySelector('#pre-plugins'); if (preList) {
                            preList.innerHTML = (CONFIG.prePluginsMeta || []).map((m,i)=>
                                renderPluginItemHTML(m, i, (CONFIG.prePluginsSource && CONFIG.prePluginsSource[i]) || '', true)
                            ).join('');
                            preList.querySelectorAll('.plugin-item').forEach(item=>{ const removeBtn=item.querySelector('.remove-plugin-btn'); if (removeBtn) removeBtn.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); removePrePluginItem(shadowRoot, item); }); attachPluginEditorBehavior(shadowRoot, item); });
                        }
                    } catch (err) { alert('导入失败：' + err.message); }
                });
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
                            <button class="remove-pattern-btn" type="button" aria-label="删除此规则" title="删除">&times;</button>
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
                CONFIG.methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'];
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
                ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'].forEach(m => {
                    const cb = shadowRoot.querySelector(`#method-${m}`);
                    if (cb) cb.checked = CONFIG.methods.includes(m);
                });
                // URL 列表
                const urlBox2 = shadowRoot.querySelector('#config-urlPatterns');
                if (urlBox2) {
                    urlBox2.innerHTML = (Array.isArray(CONFIG.urlPatternsRaw) ? CONFIG.urlPatternsRaw : CONFIG.urlPatterns.map(p => p.toString())).map(raw => `
                        <div class=\"http-monitor-config-url-pattern\">\n\
                            <input type=\"text\" class=\"http-monitor-config-input\" value=\"${String(raw).replace(/\\"/g, '&quot;')}\" placeholder=\"例如: /api/.* 或 .*\">\n\
                            <button class=\"remove-pattern-btn\" type=\"button\" aria-label=\"删除此规则\" title=\"删除\">&times;</button>\n\
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
                        <label><input type="checkbox" class="plugin-enabled" checked><b>启用</b></label>
                    </div>
                    <div class="plugin-header">
                        <label style="width:100%; height:100%;">
                            <label><b>执行模式:</b></label>
                            <select class="plugin-exec-mode">
                            <option value="inherit" selected>继承</option>
                            <option value="reuse">重用Worker</option>
                            <option value="spawn">重建Worker</option>
                            </select>
                            <label><b>超时(ms):</b></label>
                            <input type="number" class="plugin-timeout" placeholder="默认继承全局">
                        </label>
                    </div>
                    ${renderPluginToolbarHTML()}
                    ${renderPrePluginCodeEditorHTML('')}
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

        // 现有【前置】插件项绑定行为
        shadowRoot.querySelectorAll('#pre-plugins .plugin-item').forEach(item => {
            const removeBtn = item.querySelector('.remove-plugin-btn');
            if (removeBtn) {
                removeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removePrePluginItem(shadowRoot, item);
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

        // 导出/导入【前置】插件配置
        const preBar = shadowRoot.querySelector('#pre-plugins-action-bar');
        if (preBar) {
            let expPre = shadowRoot.querySelector('#export-pre-plugins-btn');
            let impPre = shadowRoot.querySelector('#import-pre-plugins-btn');
            let impPreFile = shadowRoot.querySelector('#import-pre-plugins-file');
            if (expPre) {
                expPre.addEventListener('click', () => {
                    try {
                        const data = { prePluginsMeta: CONFIG.prePluginsMeta || [], prePluginsSource: CONFIG.prePluginsSource || [] };
                        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a'); a.href = url; a.download = 'http-monitor-pre-plugins.json';
                        document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
                    } catch (e) { alert('导出失败: ' + e.message); }
                });
            }
            if (impPre && impPreFile) {
                impPre.addEventListener('click', () => { impPreFile.value=''; impPreFile.click(); });
                impPreFile.addEventListener('change', async () => {
                    const file = impPreFile.files && impPreFile.files[0]; if (!file) return;
                    try {
                        const text = await file.text(); const json = JSON.parse(text);
                        const sources = Array.isArray(json.prePluginsSource) ? json.prePluginsSource : [];
                        let meta = Array.isArray(json.prePluginsMeta) ? json.prePluginsMeta : [];
                        if (meta.length !== sources.length) meta = sources.map((_, i)=>({ name: `【前置】plugin_${i+1}`, enabled: true }));
                        CONFIG.prePluginsSource = sources; CONFIG.prePluginsMeta = meta;
                        CONFIG.prePlugins = []; sources.forEach(src=>{ const fn=compilePrePluginFromSource(src); if (typeof fn==='function') CONFIG.prePlugins.push(fn); });
                        saveConfig();
                        // 仅刷新 pre UI
                        const preList = shadowRoot.querySelector('#pre-plugins'); if (preList) {
                            preList.innerHTML = (CONFIG.prePluginsMeta || []).map((m,i)=>
                                renderPluginItemHTML(m, i, (CONFIG.prePluginsSource && CONFIG.prePluginsSource[i]) || '', true)
                            ).join('');
                            preList.querySelectorAll('.plugin-item').forEach(item=>{ const removeBtn=item.querySelector('.remove-plugin-btn'); if (removeBtn) removeBtn.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); removePrePluginItem(shadowRoot, item); }); attachPluginEditorBehavior(shadowRoot, item); });
                        }
                        alert('【前置】插件配置已导入');
                    } catch (e) { alert('导入失败：' + e.message); }
                });
            }
            let addPre = shadowRoot.querySelector('#add-pre-plugin-btn');
            if (addPre) {
                // 先移除旧监听器再绑定，避免重复绑定
                addPre.replaceWith(addPre.cloneNode(true));
                addPre = shadowRoot.querySelector('#add-pre-plugin-btn');
                addPre.addEventListener('click', (e)=>{
                    e.preventDefault(); e.stopPropagation();
                    const container = shadowRoot.querySelector('#pre-plugins'); if (!container) return;
                    const wrapper = document.createElement('div'); wrapper.className='http-monitor-config-url-pattern plugin-item';
                    wrapper.innerHTML = `
                        <div class=\"plugin-header\"> 
                            <input type=\"text\" class=\"http-monitor-config-input plugin-name\" value=\"\" placeholder=\"插件名称（唯一）\"> 
                            <label><input type=\"checkbox\" class=\"plugin-enabled\" checked><b>启用</b></label>
                        </div>
                        <div class=\"plugin-header\">\n\
                            <label style=\"width:100%; height:100%;\">\n\
                                <label><b>执行模式:</b></label>\n\
                                <select class=\"plugin-exec-mode\"> \n\
                                <option value=\"inherit\" selected>继承</option>\n\
                                <option value=\"reuse\">重用Worker</option>\n\
                                <option value=\"spawn\">重建Worker</option>\n\
                                </select>\n\
                                <label><b>超时(ms):</b></label>\n\
                                <input type=\"number\" class=\"plugin-timeout\" placeholder=\"默认继承全局\">\n\
                            </label>\n\
                        </div>
                        ${renderPluginToolbarHTML()}
                        ${renderPrePluginCodeEditorHTML('')}
                    `;
                    const removeBtn = wrapper.querySelector('.remove-plugin-btn');
                    if (removeBtn) removeBtn.addEventListener('click', (ev)=>{ ev.preventDefault(); ev.stopPropagation(); removePrePluginItem(shadowRoot, wrapper); });
                    container.appendChild(wrapper); attachPluginEditorBehavior(shadowRoot, wrapper);
                });
            }
        }

        // 导出/导入所有配置（追加到 http-monitor-config-buttons 区域）
        const buttonsBar = shadowRoot.querySelector('.http-monitor-config-buttons');
        if (buttonsBar && !shadowRoot.querySelector('#config-export-all')) {
            const exportAllBtn = document.createElement('button');
            exportAllBtn.id = 'config-export-all';
            exportAllBtn.className = 'http-monitor-config-btn-reset';
            exportAllBtn.textContent = '导出所有配置';
            // buttonsBar.appendChild(exportAllBtn);
            buttonsBar.prepend(exportAllBtn)
            exportAllBtn.addEventListener('click', () => {
                try {
                    const blob = new Blob([JSON.stringify(CONFIG, null, 2)], { type: 'application/json;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url; a.download = 'http-monitor-config.json';
                    document.body.appendChild(a); a.click(); a.remove();
                    URL.revokeObjectURL(url);
                } catch (err) {
                    alert('导出失败: ' + err.message);
                }
            });
        }
        if (buttonsBar && !shadowRoot.querySelector('#config-import-all')) {
            const importAllBtn = document.createElement('button');
            importAllBtn.id = 'config-import-all';
            importAllBtn.className = 'http-monitor-config-btn-reset';
            importAllBtn.textContent = '导入所有配置';
            const importAllFile = document.createElement('input');
            importAllFile.type = 'file';
            importAllFile.accept = 'application/json';
            importAllFile.style.display = 'none';
            buttonsBar.prepend(importAllBtn);
            buttonsBar.prepend(importAllFile);
            importAllBtn.addEventListener('click', () => { importAllFile.value = ''; importAllFile.click(); });
            importAllFile.addEventListener('change', async () => {
                const file = importAllFile.files && importAllFile.files[0];
                if (!file) return;
                try {
                    const text = await file.text();
                    const data = JSON.parse(text);
                    // 预校验 urlPatterns
                    if (Array.isArray(data.urlPatterns)) {
                        const test = [];
                        for (const raw of data.urlPatterns) {
                            if (raw instanceof RegExp) { test.push(raw); continue; }
                            const revived = revivePattern(raw);
                            if (revived instanceof RegExp) { test.push(revived); continue; }
                            test.push(new RegExp(String(raw)));
                        }
                        data.urlPatterns = test;
                    }
                    Object.assign(CONFIG, data);
                    ensureUrlPatterns();
                    // 重新编译插件
                    CONFIG.plugins = [];
                    if (Array.isArray(CONFIG.pluginsSource)) {
                        CONFIG.pluginsSource.forEach(src => {
                            const fn = compilePluginFromSource(src);
                            if (typeof fn === 'function') CONFIG.plugins.push(fn);
                        });
                    }
                    saveConfig();
                    rebuildPluginsUI(shadowRoot);
                    validatePluginNames(shadowRoot);
                    alert('所有配置已导入');
                } catch (err) {
                    alert('导入失败: ' + err.message);
                }
            });
        }
    }

    // 创建配置按钮
    function createConfigButton() {
        createEnterButtonStyle();
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
                info('开始拖动');
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
                info('结束拖动, 是否移动:', hasMoved);
                isDragging = false;
                button.classList.remove('dragging');

                // 保存位置到localStorage
                const rect = button.getBoundingClientRect();
                const position = {
                    x: rect.left,
                    y: rect.top
                };
                localStorage.setItem('httpMonitorButtonPosition', JSON.stringify(position));
                info('位置已保存:', position);

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
        createConfigButton();

        info('HTTP响应监控器已启动');
        info('配置:', CONFIG);

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
                    info('已注册插件');
                } else {
                    warn('插件必须是函数');
                }
            },
            // 清空自定义插件
            clearPlugins: () => { CONFIG.plugins = []; info('自定义插件已清空'); },
            enable: () => { CONFIG.enabled = true; saveConfig(); info('HTTP监控已启用'); },
            disable: () => { CONFIG.enabled = false; saveConfig(); info('HTTP监控已禁用'); },
            addUrlPattern: (pattern) => {
                const regex = new RegExp(pattern);
                CONFIG.urlPatterns.push(regex);
                saveConfig();
                info('已添加URL模式:', pattern);
            },
            removeUrlPattern: (pattern) => {
                const index = CONFIG.urlPatterns.findIndex(p => p.toString() === pattern);
                if (index > -1) {
                    CONFIG.urlPatterns.splice(index, 1);
                    saveConfig();
                    info('已移除URL模式:', pattern);
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
                    info('配置窗口已关闭');
                    return;
                }
                info('配置窗口未找到');
            },
            reloadConfig: () => { loadConfig(); info('配置已重新加载'); },
            clearConfig: () => {
                localStorage.removeItem('httpMonitorConfig');
                info('配置已清除，将使用默认配置');
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
                info('配置已重置为默认值');
            },
            resetButtonPosition: () => {
                localStorage.removeItem('httpMonitorButtonPosition');
                const button = document.querySelector('.http-monitor-config-btn');
                if (button) {
                    button.style.setProperty('left', '20px', 'important');
                    button.style.setProperty('top', '20px', 'important');
                    info('按钮位置已重置为默认位置');
                }
            },
            setButtonPosition: (x, y) => {
                const button = document.querySelector('.http-monitor-config-btn');
                if (button) {
                    button.style.setProperty('left', x + 'px', 'important');
                    button.style.setProperty('top', y + 'px', 'important');
                    const position = { x, y };
                    localStorage.setItem('httpMonitorButtonPosition', JSON.stringify(position));
                    info(`按钮位置已设置为: (${x}, ${y})`);
                }
            }
        };
    }
    // 依据 needHide 决定是否启动；使用面向对象的启停统一管理
    if (!needHide()) {
        if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => { try { window.__httpMonitor.start(); } catch(e) { error('start error', e) } });
        } else {
                try { window.__httpMonitor.start(); } catch(e) { error('start error', e) }
            }
    } else {
        try { window.__httpMonitor.stop(); } catch(e) { error('stop error', e) }
    }

})();
