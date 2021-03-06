'use strict';

const _ = require('lodash');
const NLUBase = require('../../NLUBase').NLUBase;
const Jovo = require('../../../jovo');

/**
 * Dialogflow request
 */
class DialogFlowRequest extends NLUBase {
    /**
     * Constructor
     * @param {*} request object
     */
    constructor(request) {
        super(request);
        if (request) {
            Object.assign(this, request);
        }
    }

    /**
     * NLU BASE Implementations
     */

    /**
     * Returns intent name
     * @return {string}
     */
    getIntentName() {
        return _.get(this, 'result.metadata.intentName');
    }

    /**
     * Returns inputs
     * @return {*}
     */
    getInputs() {
        return _.get(this, 'result.parameters');
    }


    /**
     * Returns request id
     * @return {string}
     */
    getId() {
        return _.get(this, 'id');
    }

    /**
     * Returns timestamp
     * @return {*}
     */
    getTimestamp() {
        return _.get(this, 'timestamp');
    }

    /**
     * Returns language
     * @return {string}
     */
    getLang() {
        return _.get(this, 'lang');
    }

    /**
     * Returs result object
     * @return {*}
     */
    getResult() {
        return _.get(this, 'result');
    }

    /**
     * Returns result source
     * @return {string}
     */
    getSource() {
        return _.get(this, 'result.source');
    }

    /**
     * Returns result resolved query
     * @return {string}
     */
    getResolvedQuery() {
        return _.get(this, 'result.resolvedQuery');
    }

    /**
     * Returns result speech
     * @return {string}
     */
    getSpeech() {
        return _.get(this, 'result.speech');
    }

    /**
     * Returns result action
     * @return {string}
     */
    getAction() {
        return _.get(this, 'result.action');
    }

    /**
     * Returns result action incomplete state
     * @return {boolean}
     */
    getActionIncomplete() {
        return _.get(this, 'result.actionIncomplete');
    }

    /**
     * Returns result action incomplete state
     * @return {boolean}
     */
    isActionIncomplete() {
        return this.getActionIncomplete();
    }


    /**
     * Returns parameters
     * @return {*}
     */
    getParameters() {
        return _.get(this, 'result.parameters');
    }

    /**
     * Returns contexts array
     * @return {Array}
     */
    getContexts() {
        return _.get(this, 'result.contexts');
    }

    /**
     * Returns full metadata object
     * @return {*}
     */
    getMetadata() {
        return _.get(this, 'result.metadata');
    }

    /**
     * Returns intent id
     * @return {string}
     */
    getIntentId() {
        return _.get(this, 'result.metadata.intentId');
    }

    /**
     * Returns if webhook is used
     * @return {boolean}
     */
    isWebhookUsed() {
        return _.get(this, 'result.metadata.webhookUsed');
    }

    /**
     * Returns true if webhook is used for slot filling
     * @return {boolean}
     */
    isWebhookForSlotFillingUsed() {
        return _.get(this, 'result.metadata.webhookForSlotFillingUsed');
    }

    /**
     * Returns nlu response time
     * @return {*}
     */
    getNluResponseTime() {
        return _.get(this, 'result.metadata.nluResponseTime');
    }


    /**
     * Returns fulfullment object
     * @return {*}
     */
    getFulfillment() {
        return _.get(this, 'result.fulfillment');
    }

    /**
     * Returns score
     * @return {int}
     */
    getScore() {
        return _.get(this, 'result.score');
    }

    /**
     * Returns status object
     * @return {*}
     */
    getStatus() {
        return _.get(this, 'status');
    }

    /**
     * Returns status code
     * @return {*}
     */
    getStatusCode() {
        return _.get(this, 'status.code');
    }

    /**
     * Returns status error type
     * @return {*}
     */
    getStatusErrorType() {
        return _.get(this, 'status.errorType');
    }

    /**
     * Returns session id
     * @return {string}
     */
    getSessionId() {
        return _.get(this, 'sessionId');
    }

    /**
     * Sets request id
     * @param {string} id
     * @return {DialogFlowRequest}
     */
    setId(id) {
        _.set(this, 'id', id);
        return this;
    }

    /**
     * Sets timestamp
     * @param {string} timestamp
     * @return {DialogFlowRequest}
     */
    setTimestamp(timestamp) {
        _.set(this, 'timestamp', timestamp);
        return this;
    }

    /**
     * Sets language
     * @param {string} lang
     * @return {DialogFlowRequest}
     */
    setLang(lang) {
        _.set(this, 'lang', lang);
        return this;
    }

    /**
     * Sets full result
     * @param {*} result
     * @return {DialogFlowRequest}
     */
    setResult(result) {
        _.set(this, 'result', result);
        return this;
    }

    /**
     * Sets source
     * @param {string} source
     * @return {DialogFlowRequest}
     */
    setSource(source) {
        _.set(this, 'result.source', source);
        return this;
    }

    /**
     * Sets resolved query
     * @param {string} resolvedQuery
     * @return {DialogFlowRequest}
     */
    setResolvedQuery(resolvedQuery) {
        _.set(this, 'result.resolvedQuery', resolvedQuery);
        return this;
    }

    /**
     * Sets speech
     * @param {string} speech
     * @return {DialogFlowRequest}
     */
    setSpeech(speech) {
        _.set(this, 'result.speech', speech);
        return this;
    }

    /**
     * Sets action
     * @param {string} action
     * @return {DialogFlowRequest}
     */
    setAction(action) {
        _.set(this, 'result.action', action);
        return this;
    }

    /**
     * Sets action inclomplete value
     * @param {boolean} actionIncomplete
     * @return {DialogFlowRequest}
     */
    setActionIncomplete(actionIncomplete) {
        _.set(this, 'result.actionIncomplete', actionIncomplete);
        return this;
    }

    /**
     * Sets parameters
     * @param {*} parameters
     * @return {DialogFlowRequest}
     */
    setParameters(parameters) {
        _.set(this, 'result.parameters', parameters);
        return this;
    }

    /**
     * Sets full contexts array
     * @return {DialogFlowRequest}
     */
    setContexts() {
        _.set(this, 'result.contexts', contexts);
        return this;
    }

    /**
     * Sets meta data
     * @param {*} metadata
     * @return {DialogFlowRequest}
     */
    setMetadata(metadata) {
        _.set(this, 'result.metadata', metadata);
        return this;
    }

    /**
     * Sets intentId
     * @param {string} intentId
     * @return {DialogFlowRequest}
     */
    setIntentId(intentId) {
        _.set(this, 'result.metadata.intentId', intentId);
        return this;
    }

    /**
     * Sets webhookUsed
     * @param {string} webhookUsed
     * @return {DialogFlowRequest}
     */
    setWebhookUsed(webhookUsed) {
        _.set(this, 'result.metadata.webhookUsed', webhookUsed);
        return this;
    }

    /**
     * Sets webhookForSlotFillingUsed
     * @param {string} webhookForSlotFillingUsed
     * @return {DialogFlowRequest}
     */
    setWebhookForSlotFillingUsed(webhookForSlotFillingUsed) {
        _.set(this, 'result.metadata.webhookForSlotFillingUsed', webhookForSlotFillingUsed);
        return this;
    }

    /**
     * Sets nlu response time
     * @param {int} nluResponseTime
     * @return {DialogFlowRequest}
     */
    setNluResponseTime(nluResponseTime) {
        _.set(this, 'result.metadata.nluResponseTime', nluResponseTime);
        return this;
    }

    /**
     * Sets intetn name
     * @param {string} intentName
     * @return {DialogFlowRequest}
     */
    setIntentName(intentName) {
        _.set(this, 'result.metadata.intentName', intentName);
        return this;
    }

    /**
     * Sets fulfillment object
     * @param {*} fulfillment
     * @return {DialogFlowRequest}
     */
    setFulfillment(fulfillment) {
        _.set(this, 'result.fulfillment', fulfillment);
        return this;
    }

    /**
     * Sets score
     * @param {int} score
     * @return {DialogFlowRequest}
     */
    setScore(score) {
        _.set(this, 'result.score', score);
        return this;
    }

    /**
     * Sets status object
     * @param {*} status
     * @return {DialogFlowRequest}
     */
    setStatus(status) {
        _.set(this, 'status', status);
        return this;
    }

    /**
     * Sets status code
     * @param {int} code
     * @return {DialogFlowRequest}
     */
    setStatusCode(code) {
        _.set(this, 'status.code', code);
        return this;
    }

    /**
     * Sets status error type
     * @param {string} errorType
     * @return {DialogFlowRequest}
     */
    setStatusErrorType(errorType) {
        _.set(this, 'status.errorType', errorType);
        return this;
    }

    // DEBUGGING in dialogflow workaround

    /**
     * Returns user id
     * @return {string}
     */
    getUserId() {
        return 'DIALOGFLOW-DEBUGGING-USER-ID';
    }

    /**
     * Returns locale
     * @return {String}
     */
    getLocale() {
        // hardcoded workaround
        if (this.getLang().length === 5) {
            return this.getLang();
        }

        if (this.getLang() === 'de') {
            return 'de-de';
        } else if (this.getLang() === 'fr') {
            return 'fr-fr';
        } else {
            return 'en-us';
        }
    }

    /**
     * Gets request type and maps to jovo request types
     * @public
     * @return {string}
     */
    getRequestType() {
        return Jovo.REQUEST_TYPE_ENUM.INTENT;
    }

    /**
     * Returns true if session is new
     * @return {boolean}
     */
    isNewSession() {
        return true;
    }

    // workarounds for testing from the DialogFlow Debugger

    /**
     * Returns true if device has an audio interface
     * @return {boolean}
     */
    hasAudioInterface() {
        return true;
    }

    /**
     * Returns true if device has an screen interface
     * @return {boolean}
     */
    hasScreenInterface() {
        return true;
    }

    /**
     * Returns user object from request
     * @return {*}
     */
    getUser() {
        return {};
    }

    /**
     * Returns device object from request
     * @return {*}
     */
    getDevice() {
        return {};
    }
}

module.exports.DialogFlowRequest = DialogFlowRequest;
