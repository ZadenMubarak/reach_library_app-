// Automatically generated with Reach 0.1.9 (2fb7c59c)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (2fb7c59c)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  
  
  const v180 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:28:43:application',
    fs: ['at ./index.rsh:27:17:application call to [unknown function] (defined at: ./index.rsh:27:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v180],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v182], secs: v184, time: v183, didSend: v28, from: v181 } = txn1;
      
      ;
      const v185 = v181;
      const v186 = v183;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v182], secs: v184, time: v183, didSend: v28, from: v181 } = txn1;
  ;
  let v185 = v181;
  let v186 = v183;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v201, v202], secs: v204, time: v203, didSend: v48, from: v200 } = txn2;
    ;
    const v206 = stdlib.add(v186, v202);
    let v207 = v201;
    let v208 = true;
    let v209 = v185;
    let v210 = v203;
    let v211 = v186;
    
    while (await (async () => {
      const v222 = stdlib.gt(v206, v211);
      
      return v222;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v206],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v185, v206, v207, v208, v209, v210],
          evt_cnt: 0,
          funcNum: 5,
          lct: v210,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:53:23:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v260, time: v259, didSend: v147, from: v258 } = txn4;
            
            ;
            const cv207 = v207;
            const cv208 = v208;
            const cv209 = v209;
            const cv210 = v259;
            const cv211 = v210;
            
            await (async () => {
              const v207 = cv207;
              const v208 = cv208;
              const v209 = cv209;
              const v210 = cv210;
              const v211 = cv211;
              
              if (await (async () => {
                const v222 = stdlib.gt(v206, v211);
                
                return v222;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v263 = v208 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v207;
                sim_r.txns.push({
                  amt: v263,
                  kind: 'from',
                  to: v185,
                  tok: undefined /* Nothing */
                  });
                const cv185 = v209;
                const cv186 = v210;
                
                await (async () => {
                  const v185 = cv185;
                  const v186 = cv186;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc0, ctc0, ctc2, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v260, time: v259, didSend: v147, from: v258 } = txn4;
        ;
        const cv207 = v207;
        const cv208 = v208;
        const cv209 = v209;
        const cv210 = v259;
        const cv211 = v210;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v210 = cv210;
        v211 = cv211;
        
        continue;
        }
      else {
        const {data: [v245], secs: v247, time: v246, didSend: v122, from: v244 } = txn3;
        ;
        const v251 = stdlib.gt(v245, v207);
        stdlib.assert(v251, {
          at: './index.rsh:68:22:application',
          fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v252 = v208 ? stdlib.checkedBigNumberify('./index.rsh:70:37:decimal', stdlib.UInt_max, 0) : v207;
        ;
        const cv207 = v245;
        const cv208 = false;
        const cv209 = v244;
        const cv210 = v246;
        const cv211 = v210;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v210 = cv210;
        v211 = cv211;
        
        continue;}
      
      }
    const v263 = v208 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v207;
    ;
    const cv185 = v209;
    const cv186 = v210;
    
    v185 = cv185;
    v186 = cv186;
    
    continue;
    
    }
  return;
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Object({
    startingBid: ctc0,
    timeout: ctc0
    });
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v182], secs: v184, time: v183, didSend: v28, from: v181 } = txn1;
  ;
  let v185 = v181;
  let v186 = v183;
  
  while (await (async () => {
    
    return true;})()) {
    const v192 = ctc.selfAddress();
    stdlib.protect(ctc1, await interact.showOwner(v182, v185), {
      at: './index.rsh:39:27:application',
      fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)'],
      msg: 'showOwner',
      who: 'Owner'
      });
    const v194 = stdlib.addressEq(v192, v185);
    let v195;
    if (v194) {
      const v196 = stdlib.protect(ctc2, await interact.getAuctionProps(), {
        at: './index.rsh:42:56:application',
        fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)'],
        msg: 'getAuctionProps',
        who: 'Owner'
        });
      v195 = v196;
      }
    else {
      const v197 = {
        startingBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        timeout: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      v195 = v197;
      }
    const v198 = v195.startingBid;
    const v199 = v195.timeout;
    
    const txn2 = await (ctc.sendrecv({
      args: [v185, v186, v198, v199],
      evt_cnt: 2,
      funcNum: 2,
      lct: v186,
      onlyIf: v194,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:10:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v201, v202], secs: v204, time: v203, didSend: v48, from: v200 } = txn2;
        
        ;
        const v206 = stdlib.add(v186, v202);
        const v207 = v201;
        const v208 = true;
        const v209 = v185;
        const v210 = v203;
        const v211 = v186;
        
        if (await (async () => {
          const v222 = stdlib.gt(v206, v211);
          
          return v222;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v263 = v208 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v207;
          sim_r.txns.push({
            amt: v263,
            kind: 'from',
            to: v185,
            tok: undefined /* Nothing */
            });
          const cv185 = v209;
          const cv186 = v210;
          
          await (async () => {
            const v185 = cv185;
            const v186 = cv186;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v201, v202], secs: v204, time: v203, didSend: v48, from: v200 } = txn2;
    ;
    const v206 = stdlib.add(v186, v202);
    let v207 = v201;
    let v208 = true;
    let v209 = v185;
    let v210 = v203;
    let v211 = v186;
    
    while (await (async () => {
      const v222 = stdlib.gt(v206, v211);
      
      return v222;})()) {
      const v228 = ctc.selfAddress();
      const v230 = stdlib.addressEq(v228, v185);
      const v232 = stdlib.addressEq(v228, v209);
      const v233 = v232 ? false : true;
      const v234 = v230 ? false : v233;
      let v235;
      if (v234) {
        const v236 = stdlib.protect(ctc3, await interact.getBid(v207), {
          at: './index.rsh:59:45:application',
          fs: ['at ./index.rsh:57:16:application call to [unknown function] (defined at: ./index.rsh:57:16:function exp)', 'at ./index.rsh:57:16:application call to [unknown function] (defined at: ./index.rsh:57:16:function exp)'],
          msg: 'getBid',
          who: 'Owner'
          });
        v235 = v236;
        }
      else {
        const v237 = ['None', null];
        v235 = v237;
        }
      let v238;
      switch (v235[0]) {
        case 'None': {
          const v239 = v235[1];
          v238 = false;
          
          break;
          }
        case 'Some': {
          const v240 = v235[1];
          const v241 = stdlib.gt(v240, v207);
          v238 = v241;
          
          break;
          }
        }
      const v242 = stdlib.fromSome(v235, stdlib.checkedBigNumberify('./index.rsh:63:38:decimal', stdlib.UInt_max, 0));
      
      const txn3 = await (ctc.sendrecv({
        args: [v185, v206, v207, v208, v209, v210, v242],
        evt_cnt: 1,
        funcNum: 4,
        lct: v210,
        onlyIf: v238,
        out_tys: [ctc0],
        pay: [v242, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v245], secs: v247, time: v246, didSend: v122, from: v244 } = txn3;
          
          sim_r.txns.push({
            amt: v245,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v251 = stdlib.gt(v245, v207);
          ;
          const v252 = v208 ? stdlib.checkedBigNumberify('./index.rsh:70:37:decimal', stdlib.UInt_max, 0) : v207;
          sim_r.txns.push({
            amt: v252,
            kind: 'from',
            to: v209,
            tok: undefined /* Nothing */
            });
          const cv207 = v245;
          const cv208 = false;
          const cv209 = v244;
          const cv210 = v246;
          const cv211 = v210;
          
          await (async () => {
            const v207 = cv207;
            const v208 = cv208;
            const v209 = cv209;
            const v210 = cv210;
            const v211 = cv211;
            
            if (await (async () => {
              const v222 = stdlib.gt(v206, v211);
              
              return v222;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v263 = v208 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v207;
              sim_r.txns.push({
                amt: v263,
                kind: 'from',
                to: v185,
                tok: undefined /* Nothing */
                });
              const cv185 = v209;
              const cv186 = v210;
              
              await (async () => {
                const v185 = cv185;
                const v186 = cv186;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v206],
        tys: [ctc4, ctc0, ctc0, ctc5, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v185, v206, v207, v208, v209, v210],
          evt_cnt: 0,
          funcNum: 5,
          lct: v210,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:53:23:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v260, time: v259, didSend: v147, from: v258 } = txn4;
            
            ;
            const cv207 = v207;
            const cv208 = v208;
            const cv209 = v209;
            const cv210 = v259;
            const cv211 = v210;
            
            await (async () => {
              const v207 = cv207;
              const v208 = cv208;
              const v209 = cv209;
              const v210 = cv210;
              const v211 = cv211;
              
              if (await (async () => {
                const v222 = stdlib.gt(v206, v211);
                
                return v222;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v263 = v208 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v207;
                sim_r.txns.push({
                  amt: v263,
                  kind: 'from',
                  to: v185,
                  tok: undefined /* Nothing */
                  });
                const cv185 = v209;
                const cv186 = v210;
                
                await (async () => {
                  const v185 = cv185;
                  const v186 = cv186;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc5, ctc4, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v260, time: v259, didSend: v147, from: v258 } = txn4;
        ;
        const cv207 = v207;
        const cv208 = v208;
        const cv209 = v209;
        const cv210 = v259;
        const cv211 = v210;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v210 = cv210;
        v211 = cv211;
        
        continue;
        }
      else {
        const {data: [v245], secs: v247, time: v246, didSend: v122, from: v244 } = txn3;
        ;
        const v251 = stdlib.gt(v245, v207);
        stdlib.assert(v251, {
          at: './index.rsh:68:22:application',
          fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v252 = v208 ? stdlib.checkedBigNumberify('./index.rsh:70:37:decimal', stdlib.UInt_max, 0) : v207;
        ;
        const cv207 = v245;
        const cv208 = false;
        const cv209 = v244;
        const cv210 = v246;
        const cv211 = v210;
        
        v207 = cv207;
        v208 = cv208;
        v209 = cv209;
        v210 = cv210;
        v211 = cv211;
        
        continue;}
      
      }
    const v263 = v208 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v207;
    ;
    const cv185 = v209;
    const cv186 = v210;
    
    v185 = cv185;
    v186 = cv186;
    
    continue;
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEFAyAIKFEmAgEAACI1ADEYQQJmKWRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSUMQADnSYEEDEAA30kkDEAASyQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gATMmZJcsDIGNP8PRDQDVwAgNP80AyEGWzQDVzABFzQDVzEgMgY0AyEHW0IBV0gkNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/zQDIQZbNf40BRc1/YAE+YuveDT9FlCwMgY0/wxENABJIwg1ADT9SwE4CBJEI0sBOBASRDIKSwE4BxJESDT9NP4NRLEisgE0/iI0A1cwARdNsggjshA0A1cxILIHszQDVwAgNP80/SIxADIGNAMhB1tCAMlISSMMQABZSYECDEAAUUglNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDIQRbNf40BSJbNf00BSEFWzX8gATzLQoMNP0WUDT8FlCwNP80/jT8CDT9IzT/MgY0/kIAakhIIjQBEkQ0BEkiEkw0AhIRRDQFFzX/gASCxGH+NP8WULA0AEkjCDUAgaCNBksBOAgSRCNLATgQEkQyCksBOAcSREgxADIGQgAANf9JNf40/xZQKEsBVwAoZ0glNQEyBjUCMRkiEkRCAGA1/zX+Nf01/DX7Nfo1+TT6NP8NQQAvNPk0+hZQNPsWUDT8FlEHCFA0/VA0/hZQKEsBVwBZZ0gkNQEyBjUCMRkiEkRCABuxIrIBNPsiNPxNsggjshA0+bIHszT9NP5C/4ApNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `Bg==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 89,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v201",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v201",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000fa538038062000fa5833981016040819052620000269162000228565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16200007a34156007620000a6565b6200008462000142565b6020808201805133905251439101526200009e81620000d0565b505062000307565b81620000cc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528582018051516001600160a01b03168086529051830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926200013d926002929091019062000182565b505050565b60405180604001604052806000151581526020016200017d604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b8280546200019090620002ca565b90600052602060002090601f016020900481019282620001b45760008555620001ff565b82601f10620001cf57805160ff1916838001178555620001ff565b82800160010185558215620001ff579182015b82811115620001ff578251825591602001919060010190620001e2565b506200020d92915062000211565b5090565b5b808211156200020d576000815560010162000212565b60008183036040808212156200023d57600080fd5b80518082016001600160401b0380821183831017156200026d57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200028757600080fd5b835194506020850191508482108183111715620002b457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c90821680620002df57607f821691505b602082108114156200030157634e487b7160e01b600052602260045260246000fd5b50919050565b610c8e80620003176000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780638e314769146100985780639014596a146100ab578063a209ad4e146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a6366004610a1a565b6100f4565b61005d6100b9366004610a3d565b61028e565b61005d6100cc366004610a1a565b61042d565b3480156100dd57600080fd5b506100e6610620565b60405161007a929190610a4f565b61010460056000541460116106bd565b61011e8135158061011757506001548235145b60126106bd565b60008080556002805461013090610aac565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610aac565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b0b565b90506101d5816020015143101560136106bd565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8826040516102049190610ba8565b60405180910390a1610218341560106106bd565b6102206108dc565b815181516001600160a01b0391821690526020808401518351820152604080850151828501805191909152606080870151825190151594019390935260808087015182519516949092019390935282514392019190915260a084015191510152610289816106e6565b505050565b61029e60036000541460096106bd565b6102b8813515806102b157506001548235145b600a6106bd565b6000808055600280546102ca90610aac565b80601f01602080910402602001604051908101604052809291908181526020018280546102f690610aac565b80156103435780601f1061031857610100808354040283529160200191610343565b820191906000526020600020905b81548152906001019060200180831161032657829003601f168201915b505050505080602001905181019061035b9190610bcd565b604080518435815260208086013590820152848201358183015290519192507f1909e55c00533c67ba90e14c8fe93a469c3600425ed0758459eff538687e7b91919081900360600190a16103b1341560086106bd565b6103b96108dc565b815181516001600160a01b03909116905260208201516103de90604085013590610c32565b815160209081019190915280820180518583013590528051600190830152835181516001600160a01b0390911660409091015280514360609091015290830151905160800152610289816106e6565b61043d600560005414600d6106bd565b6104578135158061045057506001548235145b600e6106bd565b60008080556002805461046990610aac565b80601f016020809104026020016040519081016040528092919081815260200182805461049590610aac565b80156104e25780601f106104b7576101008083540402835291602001916104e2565b820191906000526020600020905b8154815290600101906020018083116104c557829003601f168201915b50505050508060200190518101906104fa9190610b0b565b905061050d81602001514310600f6106bd565b6040805183358152602080850135908201527f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f910160405180910390a161055b34602084013514600b6106bd565b604081015161057190602084013511600c6106bd565b80608001516001600160a01b03166108fc8260600151610595578260400151610598565b60005b6040518115909202916000818181858888f193505050501580156105c0573d6000803e3d6000fd5b506105c96108dc565b815181516001600160a01b039091169052602080830151825182015280820180518583013590528051600092019190915280513360409091015280514360609091015260a0830151905160800152610289816106e6565b60006060600054600280805461063590610aac565b80601f016020809104026020016040519081016040528092919081815260200182805461066190610aac565b80156106ae5780601f10610683576101008083540402835291602001916106ae565b820191906000526020600020905b81548152906001019060200180831161069157829003601f168201915b50505050509050915091509091565b816106e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516080015181600001516020015111156107f1576040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528151516001600160a01b0390811680835283516020908101518185019081528186018051516040808801918252825185015115156060808a01918252845183015189166080808c01918252955182015160a0808d019182526005600055436001558551998a019a909a5296519388019390935292519286019290925290511515918401919091525190931691810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061028992919061092f565b8060000151600001516001600160a01b03166108fc82602001516020015161081e57602083015151610821565b60005b6040518115909202916000818181858888f19350505050158015610849573d6000803e3d6000fd5b506108526109b3565b602080830180516040015183830180516001600160a01b039092169091529051606001519051909101526106e281610888565b50565b604080518082019091526000808252602082015260208281018051516001600160a01b03168084529051820151838301908152600360005543600155604080519384019290925251908201526060016107cd565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b82805461093b90610aac565b90600052602060002090601f01602090048101928261095d57600085556109a3565b82601f1061097657805160ff19168380011785556109a3565b828001600101855582156109a3579182015b828111156109a3578251825591602001919060010190610988565b506109af9291506109ed565b5090565b604051806040016040528060001515815260200161092a604051806040016040528060006001600160a01b03168152602001600081525090565b5b808211156109af57600081556001016109ee565b600060408284031215610a1457600080fd5b50919050565b600060408284031215610a2c57600080fd5b610a368383610a02565b9392505050565b600060608284031215610a1457600080fd5b82815260006020604081840152835180604085015260005b81811015610a8357858101830151858201606001528201610a67565b81811115610a95576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ac057607f821691505b60208210811415610a1457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610af857600080fd5b919050565b801515811461088557600080fd5b600060c08284031215610b1d57600080fd5b60405160c0810181811067ffffffffffffffff82111715610b4e57634e487b7160e01b600052604160045260246000fd5b604052610b5a83610ae1565b815260208301516020820152604083015160408201526060830151610b7e81610afd565b6060820152610b8f60808401610ae1565b608082015260a083015160a08201528091505092915050565b81358152604081016020830135610bbe81610afd565b80151560208401525092915050565b600060408284031215610bdf57600080fd5b6040516040810181811067ffffffffffffffff82111715610c1057634e487b7160e01b600052604160045260246000fd5b604052610c1c83610ae1565b8152602083015160208201528091505092915050565b60008219821115610c5357634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220d59b822819c7161a8d7a0a699bd41a841b11d2ce6cc2e3a91cd4d0af3c4f4ad964736f6c634300080c0033`,
  BytecodeLen: 4005,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:35:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:53:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "Owner": Owner
  };
export const _APIs = {
  };
